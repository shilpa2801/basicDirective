import { BasicDirectivePage } from './app.po';

describe('basic-directive App', () => {
  let page: BasicDirectivePage;

  beforeEach(() => {
    page = new BasicDirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
