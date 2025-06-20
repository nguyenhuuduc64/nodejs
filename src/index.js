const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const db = require("./config/db/index.js");
const methodOverride = require("method-override");
db.connectDB(); // Connect to MongoDB
const app = express();
const port = 3000;
const route = require("./routes/index.route");
app.use(express.static(path.join(__dirname, "public")));
const sortMiddleware = require("./app/middlewares/sortMiddleware");
app.use(sortMiddleware);
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method")); // Override with POST having ?_method=DELETE

route(app);

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort?.column ? sort.type : 'default';

        const icons = {
          default: 'fa-solid fa-arrows-up-down',
          asc: 'fa-solid fa-angle-up',
          desc: 'fa-solid fa-angle-down',
        };
        const types = {
          default: 'asc',
          asc: 'desc',
          desc: 'asc',
        };

        const type = types[sortType];

        const icon = icons[sortType];

        return `
          <a href="?_sort&column=${field}&type=${type}">
            <i class="${icon}"></i>
          </a>
        `;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
