import { WomenTechTrainingPage } from './app.po';

describe('womenTechTraining App', () => {
  let page: WomenTechTrainingPage;

  beforeEach(() => {
    page = new WomenTechTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
