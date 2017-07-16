import { NgSPAPage } from './app.po';

describe('ng-spa App', () => {
  let page: NgSPAPage;

  beforeEach(() => {
    page = new NgSPAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
