import { Angular2CliStarterPage } from './app.po';

describe('angular2-cli-starter App', function() {
  let page: Angular2CliStarterPage;

  beforeEach(() => {
    page = new Angular2CliStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
