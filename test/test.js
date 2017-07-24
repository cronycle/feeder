const fs = require('fs');
const feeder = require('../src/index');
//getFeed('http://files.elderscrollsonline.com/rss/en-us/eso-rss.xml', (data) => { fs.writeFile('./test/test-output.json', JSON.stringify(data)); });
//feeder.getFeed('http://redfrex.net/overfeed', (data) => { fs.writeFile('test/test-output.json', JSON.stringify(data)); });
//feeder.getFeed('https://google.com', (data) => {if (data instanceof feeder.FeederException){console.log('error') } else {fs.writeFile('./test/test-output.json', JSON.stringify(data));} });

//feeder.getFeed('http://feeds.reuters.com/news/artsculture?format=xml', (data) => { fs.writeFile('./test/test-output.json', JSON.stringify(data)); });
// feeder.getFeed('http://asd/;flkjasldjflasjdflsjdlfja.net', (data) => { fs.writeFile('./test/test-output.json', JSON.stringify(data)); });

// feeder.getFeed('https://www.google.co.uk/alerts/feeds/00748196499008602977/1479497132763089700', (data) => {
//   fs.writeFile('./test/test-output.json', JSON.stringify(data));
// });

feeder.getFeed('http://feeds.feedburner.com/TechCrunch', (data) => {
  console.log('data', data);
});


// const feeder = require('../src/index');
// feeder.getFeed('http://feeds.reuters.com/news/artsculture?format=xml', (data) => { console.log(data.title); });