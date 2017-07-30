import { AngularSsrFirebasePage } from './app.po';

describe('angular-ssr-firebase App', () => {
  let page: AngularSsrFirebasePage;

  beforeEach(() => {
    page = new AngularSsrFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
