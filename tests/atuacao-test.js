const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');

const url = process.env.PREVIEW_URL || 'http://127.0.0.1:4176/#atuacao';
const screenshot = process.env.SCREENSHOT_PATH || '';

(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const results = [];
  for (const viewport of [{name:'pc', width:1440, height:900}, {name:'tablet', width:900, height:1024}, {name:'celular', width:390, height:844}]) {
    const page = await browser.newPage({ viewport });
    const consoleErrors = [];
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForSelector('#atuacao:not([hidden])');
    const layout = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      resourceButton: document.querySelector('[data-atuacao-mode="recursos"]').getBoundingClientRect().height,
      legislationButton: document.querySelector('[data-atuacao-mode="legislacao"]').getBoundingClientRect().height,
      records: document.querySelector('#recursos-count').textContent,
      appVisible: !document.querySelector('#app-shell').hidden
    }));
    if (viewport.name === 'pc') {
      await page.selectOption('#recurso-categoria', { label: 'Saúde' });
      await page.waitForTimeout(80);
      const health = await page.evaluate(() => ({
        records: document.querySelector('#recursos-count').textContent,
        kpis: document.querySelector('#recursos-kpis').innerText,
        table: document.querySelector('#recursos-table').innerText
      }));
      if (!health.records.startsWith('14 ') || !health.kpis.includes('R$ 1.443.538,56') || !health.kpis.includes('R$ 200.000,00')) throw new Error(`Filtro Saúde divergente: ${JSON.stringify(health)}`);
      if (screenshot) await page.screenshot({ path: screenshot, fullPage: true });
      await page.click('[data-proof="Informal"]');
      if (!(await page.textContent('#recursos-count')).startsWith('12 ')) throw new Error('Botão de verba informal não filtrou os registros.');
      await page.click('[data-atuacao-mode="legislacao"]');
      const legal = await page.evaluate(() => ({ count: document.querySelector('#legislacao-count').textContent, kpis: document.querySelector('#legislacao-kpis').innerText }));
      if (!legal.count.startsWith('24 ') || !legal.kpis.includes('15') || !legal.kpis.includes('13 vigentes')) throw new Error(`Resumo legislativo divergente: ${JSON.stringify(legal)}`);
      await page.selectOption('#legislacao-tipo', { label: 'Projeto de lei' });
      await page.selectOption('#legislacao-status', { label: 'Retirado' });
      if (!(await page.textContent('#legislacao-count')).startsWith('5 ')) throw new Error('Filtro de projetos retirados divergente.');
      await page.click('[data-atuacao-mode="recursos"]');
      await page.click('#recursos-limpar');
    }
    results.push({ viewport: viewport.name, ...layout, consoleErrors });
    await page.close();
  }
  await browser.close();
  console.log(JSON.stringify({ passed: results.every(item => item.overflow <= 1 && item.consoleErrors.length === 0), results, screenshot }, null, 2));
})().catch(error => { console.error(error); process.exit(1); });
