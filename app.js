const express = require("express");
const app = express();
app.get("/categories/:categoryId/products/:productId", function (request, response) {
        let catId = request.params["categoryId"];
        let prodId = request.params["productId"];
        response.send(`Категория: ${catId}  Товар: ${prodId}`);
    });
    
 app.listen(3000);

    