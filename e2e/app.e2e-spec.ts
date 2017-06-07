import { FreelanceDeployPage } from './app.po';

describe('freelance-deploy App', () => {
  let page: FreelanceDeployPage;

  beforeEach(() => {
    page = new FreelanceDeployPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
