const newRouter = require("./news.route");
const siteRouter = require("./site.route");
const courseRouter = require("./courses.route");
const meRouter = require("./me.route");
function route(app) {
  app.use("/me", meRouter);
  app.use("/courses", courseRouter);
  app.use("/news", newRouter);
  app.use("/", siteRouter);
}

module.exports = route;
