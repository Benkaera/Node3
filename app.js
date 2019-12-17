const express = require("express");
const app = express();
const userController = require("./controllers/userController.js");
const homeController = require("./controllers/homeController.js");
 // определяем Router
const userRouter = express.Router();
const homeRouter = express.Router();
  // определяем маршруты и их обработчики внутри роутера userRouter
userRouter.use("/create", userController.addUser);
userRouter.use("/", userController.getUsers);
app.use("/users", userRouter);
 // определяем маршруты и их обработчики внутри роутера homeRouter
homeRouter.get("/about", homeController.about);
homeRouter.get("/", homeController.index);
app.use("/", homeRouter);
 app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
 app.listen(3000);
