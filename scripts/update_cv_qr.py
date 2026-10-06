"""Update only the QR codes and portfolio links, preserving the existing CV layout.
Requires reportlab and pypdf. Run again safely when profile URLs change.
"""
from io import BytesIO
from pathlib import Path
from pypdf import PdfReader, PdfWriter
from pypdf.generic import TextStringObject
from reportlab.pdfgen import canvas
from reportlab.graphics import renderPDF
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing

ROOT = Path(__file__).resolve().parent.parent / 'public' / 'files'
PROFILE_URLS = {
    'TECH': 'https://manongomezmor.fr/about/developpeur-full-stack/',
    'PROJECT': 'https://manongomezmor.fr/about/chef-de-projet/',
}


def profile_url(mode, lang):
    url = PROFILE_URLS[mode.upper()]
    return url.replace('https://manongomezmor.fr/', 'https://manongomezmor.fr/en/') if lang.lower() == 'en' else url


def draw_qr(c, url, x, y, size=62):
    qr = QrCodeWidget(url, barLevel='M')
    x0, y0, x1, y1 = qr.getBounds()
    drawing = Drawing(size, size, transform=[size/(x1-x0), 0, 0, size/(y1-y0), 0, 0])
    drawing.add(qr)
    renderPDF.draw(drawing, c, x, y)


def update(path, url):
    reader = PdfReader(path)
    page = reader.pages[0]
    portfolio = [annotation.get_object() for annotation in page.get('/Annots', [])
                 if str(annotation.get_object().get('/A', {}).get('/URI', '')).startswith('https://manongomezmor.fr')]
    if len(portfolio) != 1:
        raise ValueError(f'{path.name}: expected one portfolio link')
    link = portfolio[0]
    x, y, _, _ = map(float, link['/Rect'])
    link['/A'][TextStringObject('/URI')] = TextStringObject(url)
    overlay = BytesIO()
    c = canvas.Canvas(overlay, pagesize=(float(page.mediabox.width), float(page.mediabox.height)))
    c.setFillColorRGB(1, 1, 1)
    c.rect(x, y, 62, 62, fill=1, stroke=0)
    draw_qr(c, url, x, y)
    c.save()
    page.merge_page(PdfReader(overlay).pages[0])
    writer = PdfWriter()
    writer.append(reader)
    if reader.metadata:
        writer.add_metadata(reader.metadata)
    output = BytesIO()
    writer.write(output)
    path.write_bytes(output.getvalue())
    print(f'{path.name}: {url}')


if __name__ == '__main__':
    for mode, url in PROFILE_URLS.items():
        for lang in ('FR', 'EN'):
            update(ROOT / f'CV-Manon-Gomez-Mor-{mode}-{lang}.pdf', profile_url(mode, lang))
