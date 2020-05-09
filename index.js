const request = require('request');
const cheerio = require('cheerio');
const imageDownloader = require('node-image-downloader');
//const download = require('image-downloader');
request('https://memegen.link/examples', function (err, res, body) {
  const $ = cheerio.load(body);
  $('.row a').each(function (i, el) {
    const url = 'https://memegen.link';
    const item = $(el).text();
    const img = $(el).attr('href').replace(/[]/g, '').split('?')[0];
    const link = url + img;

    if (i < 10) {
      const firstTen = link;
      imageDownloader({
        imgs: [
          {
            uri: link,
            filename: `${i}`,
          },
        ],
        dest: './memes',
      });
      console.log(firstTen);
    }
  });
});

/*<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
<a href="/success/your_text/goes_here.jpg?preview=true&amp;watermark=none&amp;share=true">
<img class="meme-img" src="/success/your_text/goes_here.jpg?preview=true&amp;watermark=none">
</a>
</div>
*/

// imageDownloader({
//   imgs: [
//     {
//       uri:
//         'https://memegen.link/biw/gets_iced_coffee/in_the_winter.jpg?preview=true&watermark=none',
//     },
//   ],
//   dest: './Memes',
// });
