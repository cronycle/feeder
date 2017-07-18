const fs = require('fs');
const feeder = require('../src/index');

describe('should be able to fetch different types of ATOM feed', () => {

  describe('google alert feed', () => {

    const feed = 'https://www.google.co.uk/alerts/feeds/00748196499008602977/1479497132763089700';

    it('should fetch it', (done) => {
      feeder.getFeed(feed, (data) => {
        expect(data).toBeDefined();

        done();
      });
    });

    it('should get all basic data', (done) => {
      feeder.getFeed(feed, (data) => {
        expect(data.title).toBeDefined();
        expect(data.entrys.length).toBeGreaterThan(0);

        var entry = data.entrys[0];

        expect(entry.link.length).toBeGreaterThan(0);
        expect(entry.link[0].href).toBeDefined();
        expect(entry.title).toBeDefined();
        expect(entry.content).toBeDefined();

        done();
      });
    });

  });

});