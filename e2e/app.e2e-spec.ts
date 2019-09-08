import { RoadToAngularPage } from './app.po';

describe('road-to-angular App', function() {
  let page: RoadToAngularPage;

  beforeEach(() => {
    page = new RoadToAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
