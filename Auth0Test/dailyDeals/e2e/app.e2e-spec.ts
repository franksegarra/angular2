import { DailyDealsPage } from './app.po';

describe('daily-deals App', () => {
  let page: DailyDealsPage;

  beforeEach(() => {
    page = new DailyDealsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
