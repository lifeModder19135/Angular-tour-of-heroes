import { HeroesTutorialAppPage } from './app.po';

describe('heroes-tutorial-app App', function() {
  let page: HeroesTutorialAppPage;

  beforeEach(() => {
    page = new HeroesTutorialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
