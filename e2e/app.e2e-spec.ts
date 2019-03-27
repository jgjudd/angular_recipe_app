import { RecipeShoppingAppPage } from './app.po';

describe('recipe-shopping-app App', () => {
  let page: RecipeShoppingAppPage;

  beforeEach(() => {
    page = new RecipeShoppingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
