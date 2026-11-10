// tools/social-card-type.swift
// Fills tools/social-card-type.json with the lettering of the social card and the avatar as outlines,
// so tools/build-images.mjs can draw them with ImageMagick alone (which cannot set a variable font's
// width axis). Run it only when that wording, its sizes or its fonts change; macOS only (CoreText).
//
//   swift tools/social-card-type.swift tools/social-card-type.json \
//     Anybody=prototypes/fonts/anybody-latin-wdth-wght.woff2 PublicSans-Medium=/path/to/PublicSans-Medium.ttf
//
// For every run in the file it reads name, font, size (px), wght, wdth, tracking (em, CSS letter-spacing)
// and text, and writes back width, ascent, descent and d: an SVG path in px, y down, with its origin
// at the left end of the baseline. Kerning is the font's own, as a browser applies it.
import CoreGraphics
import CoreText
import Foundation

let args = CommandLine.arguments
guard args.count >= 3 else { fatalError("usage: swift social-card-type.swift file.json Name=fontfile ...") }
let fileURL = URL(fileURLWithPath: args[1])
var fonts: [String: CGFont] = [:]
for pair in args.dropFirst(2) {
  let parts = pair.split(separator: "=", maxSplits: 1).map(String.init)
  guard parts.count == 2, let data = NSData(contentsOfFile: parts[1]), let provider = CGDataProvider(data: data), let font = CGFont(provider) else { fatalError("cannot load \(pair)") }
  fonts[parts[0]] = font
}
func num(_ v: CGFloat) -> String {
  var s = String(format: "%.2f", Double(v))
  while s.hasSuffix("0") { s.removeLast() }
  if s.hasSuffix(".") { s.removeLast() }
  return s == "-0" ? "0" : s
}
var doc = try JSONSerialization.jsonObject(with: Data(contentsOf: fileURL)) as! [String: Any]
var runs = doc["runs"] as! [[String: Any]]
for i in runs.indices {
  var r = runs[i]
  let name = r["font"] as! String, size = CGFloat((r["size"] as! NSNumber).doubleValue), text = r["text"] as! String
  guard let cg = fonts[name] else { fatalError("no font file given for \(name)") }
  var axes: [NSNumber: NSNumber] = [:]
  if let v = r["wght"] as? NSNumber { axes[NSNumber(value: 0x7767_6874)] = v } // 'wght'
  if let v = r["wdth"] as? NSNumber { axes[NSNumber(value: 0x7764_7468)] = v } // 'wdth'
  let descriptor = axes.isEmpty ? nil : CTFontDescriptorCreateWithAttributes([kCTFontVariationAttribute: axes] as CFDictionary)
  let font = CTFontCreateWithGraphicsFont(cg, size, nil, descriptor)
  let line = CTLineCreateWithAttributedString(NSAttributedString(string: text, attributes: [NSAttributedString.Key(kCTFontAttributeName as String): font]))
  let spacing = CGFloat((r["tracking"] as? NSNumber)?.doubleValue ?? 0) * size // added after every character, as CSS does
  var d = ""
  for run in CTLineGetGlyphRuns(line) as! [CTRun] {
    let count = CTRunGetGlyphCount(run)
    var glyphs = [CGGlyph](repeating: 0, count: count)
    var positions = [CGPoint](repeating: .zero, count: count)
    var indices = [CFIndex](repeating: 0, count: count)
    CTRunGetGlyphs(run, CFRangeMake(0, 0), &glyphs)
    CTRunGetPositions(run, CFRangeMake(0, 0), &positions)
    CTRunGetStringIndices(run, CFRangeMake(0, 0), &indices)
    let runFont = (CTRunGetAttributes(run) as NSDictionary)[kCTFontAttributeName as String] as! CTFont
    for g in 0..<count {
      guard let path = CTFontCreatePathForGlyph(runFont, glyphs[g], nil) else { continue } // a space has no outline
      let ox = positions[g].x + CGFloat(indices[g]) * spacing, oy = positions[g].y
      path.applyWithBlock { element in
        let p = element.pointee.points
        func pt(_ k: Int) -> String { "\(num(p[k].x + ox)) \(num(-(p[k].y + oy)))" }
        switch element.pointee.type {
        case .moveToPoint: d += "M \(pt(0)) "
        case .addLineToPoint: d += "L \(pt(0)) "
        case .addQuadCurveToPoint: d += "Q \(pt(0)) \(pt(1)) "
        case .addCurveToPoint: d += "C \(pt(0)) \(pt(1)) \(pt(2)) "
        case .closeSubpath: d += "Z "
        @unknown default: break
        }
      }
    }
  }
  r["width"] = NSDecimalNumber(string: num(CGFloat(CTLineGetTypographicBounds(line, nil, nil, nil)) + CGFloat(text.utf16.count) * spacing))
  r["ascent"] = NSDecimalNumber(string: num(CTFontGetAscent(font)))
  r["descent"] = NSDecimalNumber(string: num(CTFontGetDescent(font)))
  r["d"] = d.trimmingCharacters(in: .whitespaces)
  runs[i] = r
}
doc["runs"] = runs
var out = try JSONSerialization.data(withJSONObject: doc, options: [.prettyPrinted, .sortedKeys, .withoutEscapingSlashes])
out.append(0x0A)
try out.write(to: fileURL)
print("wrote \(runs.count) runs to \(fileURL.path)")
