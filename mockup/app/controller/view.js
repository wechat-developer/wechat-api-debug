
module.exports = app => {
  class ViewController extends app.Controller {
    * index() {
      const { ctx, config } = this;
      yield ctx.render('index.html', { env: config.props['egg.env'] });
    }

    * debugger() {
      const { ctx, config } = this;
      yield ctx.render('debugger.html', { env: config.props['egg.env'] });
    }
  }

  return ViewController;
};
