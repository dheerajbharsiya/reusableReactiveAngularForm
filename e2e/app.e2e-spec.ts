import { SimpleSPAPage } from './app.po';

describe('simple-spa App', () => {
  let page: SimpleSPAPage;

  beforeEach(() => {
    page = new SimpleSPAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
