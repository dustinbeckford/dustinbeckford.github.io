# Resume PDF Creation Instructions

## How to Convert HTML to PDF

### Option 1: Browser Print to PDF
1. Open `Dustin_Beckford_Resume.html` in your browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Select "Save as PDF" as the destination
4. Choose "More settings" and set:
   - Paper size: A4
   - Margins: Minimum
   - Scale: 100%
5. Click "Save" and name it `Dustin_Beckford_Resume.pdf`

### Option 2: Online HTML to PDF Converter
1. Upload the HTML file to an online converter like:
   - HTML to PDF API
   - SmallPDF
   - ILovePDF
2. Download the converted PDF
3. Rename it to `Dustin_Beckford_Resume.pdf`

### Option 3: Command Line (if you have wkhtmltopdf installed)
```bash
wkhtmltopdf --page-size A4 --margin-top 0.5in --margin-bottom 0.5in --margin-left 0.5in --margin-right 0.5in Dustin_Beckford_Resume.html Dustin_Beckford_Resume.pdf
```

## File Placement
Once you have the PDF file, place it in the `public` folder of your project so it can be downloaded by users.

The download button in your portfolio will automatically work once the PDF file is in place!
