import Sitemapper from 'sitemapper';
import fs from 'fs';

(async () => {
  const Google = new Sitemapper({
    url: 'https://skyksit.com/sitemap.xml',
    timeout: 15000, // 15 seconds
  });

  try {
    const { sites } = await Google.fetch();
    // console.log(sites);
    fs.writeFileSync('sitemap.txt', sites.join("\n"));

  } catch (error) {
    console.log(error);
  }
})();