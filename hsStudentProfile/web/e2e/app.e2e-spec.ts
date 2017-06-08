import { UploadtestPage } from './app.po';

describe('uploadtest App', () => {
  let page: UploadtestPage;

  beforeEach(() => {
    page = new UploadtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
