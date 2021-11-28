const { Mongoose } = require("mongoose");

function createShop(req, res) {
    let Shop = require("../models/todoS");
    let newShop = Shop ({
        name: req.body.name,
        description : req.body.description
    });
  
    newShop.save()
    .then((savedShop) => {

        //send back the created Todo
        res.json(savedShop);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function createCategory(req, res) {
    let Category = require("../models/todoC");
    let newCategory = Category ({
        name: req.body.name,
        description : req.body.description,
        shopId:req.body.shopId
    });
  
    newCategory.save()
    .then((savedCategory) => {

        //send back the created Todo
        res.json(savedCategory);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function createProduct(req, res) {
    let Product = require("../models/todoP");
    let newProduct = Product ({
        name: req.body.name,
        description : req.body.description,
        price : req.body.price,
        categoryId:req.body.categoryId
    });
  
    newProduct.save()
    .then((savedProduct) => {

        //send back the created Todo
        res.json(savedProduct);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readShops(req, res) {
    let Shop = require("../models/todoS");
    Shop.find({})
    .then((shops) => {
        res.status(200).json(shops);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readShop(req, res) {
    let Shop = require("../models/todoS");
    Shop.findById({_id : req.params.id})
    .then((shop) => {
        res.status(200).json(shop);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readCategories(req, res) {
    let Category = require("../models/todoC");
    Category.find({})
    .then((categories) => {
        res.status(200).json(categories);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readCategory(req, res) {
    let Category = require("../models/todoC");
    Category.findById({_id : req.params.id})
    .then((category) => {
        res.status(200).json(category);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readProducts(req, res) {
    let Product = require("../models/todoP");
    Product.find({})
    .then((products) => {
        res.status(200).json(products);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readProduct(req, res) {
    let Product = require("../models/todoP");
    Product.findById({_id : req.params.id})
    .then((product) => {
        res.status(200).json(product);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateShop(req, res) {
    let Shop = require("../models/todoS");
    Shop.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        description : req.body.description}, 
        {new : true})
    .then((updatedShop) => {
        res.status(200).json(updatedShop);
    }, (err) => {
        res.status(500).json(err);
    });
}

function updateCategory(req, res) {
    let Category = require("../models/todoC");
    Category.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        description : req.body.description,
        shopId : req.body.shopId},
        {new : true})
    .then((updatedCategory) => {
        res.status(200).json(updatedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
}

function updateProduct(req, res) {
    let Product = require("../models/todoP");
    Product.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        description : req.body.description, 
        price : req.body.price,
        categoryId:req.body.category},
        {new : true})
    .then((updatedProduct) => {
        res.status(200).json(updatedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteShop(req, res) {

    let Shop = require("../models/todoS");

    Shop.findOneAndRemove({_id : req.params.id})
    .then((deletedShop) => {
        res.status(200).json(deletedShop);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteCategory(req, res) {

    let Category = require("../models/todoC");

    Category.findOneAndRemove({_id : req.params.id})
    .then((deletedCategory) => {
        res.status(200).json(deletedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteProduct(req, res) {

    let Product = require("../models/todoP");

    Product.findOneAndRemove({_id : req.params.id})
    .then((deletedProduct) => {
        res.status(200).json(deletedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.createS = createShop;
module.exports.createC = createCategory;
module.exports.createP = createProduct;

module.exports.readSs = readShops;
module.exports.readS = readShop;
module.exports.readCs = readCategories;
module.exports.readC = readCategory;
module.exports.readPs = readProducts;
module.exports.readP = readProduct;

module.exports.deleteS = deleteShop;
module.exports.deleteC = deleteCategory;
module.exports.deleteP = deleteProduct;

module.exports.updateS = updateShop;
module.exports.updateC = updateCategory;
module.exports.updateP = updateProduct;