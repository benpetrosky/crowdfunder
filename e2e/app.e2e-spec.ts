import { MoneyStuffPage } from './app.po';

describe('money-stuff App', () => {
  let page: MoneyStuffPage;

  beforeEach(() => {
    page = new MoneyStuffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
