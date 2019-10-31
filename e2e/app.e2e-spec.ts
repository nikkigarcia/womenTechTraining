import { Angular2coursePage } from './app.po';

describe('angular2course App', () => {
  let page: Angular2coursePage;

  beforeEach(() => {
    page = new Angular2coursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
