import Sitemapper from 'sitemapper';
import fs from 'fs';

const sitemapUrl = 'https://skyksit.com/post-sitemap-2.xml';

(async () => {
  const Google = new Sitemapper({
    url: sitemapUrl,
    timeout: 15000, // 15 seconds
  });

  try {
    const { sites } = await Google.fetch();
    // console.log(sites);
    fs.writeFileSync('sitemap.txt', sites.join('\n'));
  } catch (error) {
    console.log(error);
  }
})();