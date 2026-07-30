import puppeteer from 'puppeteer';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CVs = [
  {
    url: 'http://localhost:5173/CV_Tibo-/cv/CV_GerardoMartinez_Print.html',
    out: 'public/cv/CV_GerardoMartinez.pdf',
    label: 'Premium (neon)',
  },
  {
    url: 'http://localhost:5173/CV_Tibo-/cv/CV_GerardoMartinez_Business.html',
    out: 'public/cv/CV_GerardoMartinez_Business.pdf',
    label: 'Empresarial',
  },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    userDataDir: path.join(os.tmpdir(), 'puppeteer_cv_gen'),
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const cv of CVs) {
    console.log(`⏳ Generando versión: ${cv.label}...`);
    const page = await browser.newPage();
    await page.goto(cv.url, { waitUntil: 'networkidle0', timeout: 60000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.pdf({
      path: path.resolve(__dirname, cv.out),
      format: 'Letter',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await page.close();
    console.log(`✅ ${cv.label} → ${cv.out}`);
  }

  await browser.close();
  console.log('\n🎉 Ambos PDFs generados correctamente.');
})();
