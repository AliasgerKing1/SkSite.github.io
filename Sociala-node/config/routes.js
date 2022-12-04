const routes = require("express").Router();

routes.use("/api/user", require("../controller/UserController"));
routes.use("/api/admin/login", require("../controller/AdminController"));
// routes.use("/api/category", require("../controller/CategoryController"));
// routes.use("/api/product", require("../controller/ProductController"));

module.exports = routes;