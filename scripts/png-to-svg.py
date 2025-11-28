#!/usr/bin/env python3
"""
PNG to SVG Converter for LumenCat Logo
Converts LumenCatWithoutBackground.png to optimized SVG

Requirements:
    pip install pillow potrace

Alternative online tools:
    - https://www.pngtosvg.com/
    - https://convertio.co/de/png-svg/
    - https://image.online-convert.com/de/convert-to-svg
"""

import os
from pathlib import Path

def convert_png_to_svg():
    """
    Converts the PNG logo to SVG using potrace.
    Note: This requires potrace to be installed on your system.
    """
    
    png_path = Path("Bilder/LumenCatWithoutBackground.png")
    svg_path = Path("Bilder/logo.svg")
    
    if not png_path.exists():
        print(f"❌ Error: {png_path} not found")
        return
    
    print(f"🔄 Converting {png_path} to SVG...")
    
    # Convert PNG to PBM first (potrace requirement)
    pbm_path = Path("Bilder/temp.pbm")
    
    try:
        # Using ImageMagick (if installed)
        os.system(f'magick "{png_path}" "{pbm_path}"')
        
        # Convert PBM to SVG using potrace
        os.system(f'potrace "{pbm_path}" -s -o "{svg_path}"')
        
        # Clean up temp file
        pbm_path.unlink(missing_ok=True)
        
        print(f"✅ SVG created: {svg_path}")
        print(f"📦 File size: {svg_path.stat().st_size / 1024:.2f} KB")
        
    except Exception as e:
        print(f"❌ Error during conversion: {e}")
        print("\n💡 Alternative: Use online converter:")
        print("   - https://www.pngtosvg.com/")
        print("   - Upload your PNG and download the optimized SVG")

if __name__ == "__main__":
    print("=" * 60)
    print("LumenCat Logo Converter")
    print("=" * 60)
    
    # Check if potrace is installed
    if os.system("potrace --version > nul 2>&1") != 0:
        print("\n⚠️  Potrace not installed!")
        print("\n📝 Installation instructions:")
        print("   Windows: Download from http://potrace.sourceforge.net/")
        print("   macOS:   brew install potrace")
        print("   Linux:   sudo apt-get install potrace")
        print("\n💡 Or use online converter: https://www.pngtosvg.com/")
    else:
        convert_png_to_svg()
