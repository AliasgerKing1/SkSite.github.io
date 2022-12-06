const routes = require("express").Router();
const Product = require("../models/Product");

routes.post("/", (req, res)=> {
    Product.create(req.body, (error)=> {
        res.send({success : true});
    })
})

routes.get("/", (req,res)=> {
    Product.find({}, (error, result=> {
        res.send(result);
    }))
})
// routes.delete("/:id", (req,res)=> {
//     let id = req.params.id;
//     Product.deleteMany({_id : id}, (error)=> {
//         res.send({success : true});
//     })
// })

module.exports = routes;