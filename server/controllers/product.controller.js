const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = async (request, response) => {
    try {
        const { title, price, description } = request.body;
        console.log(title, price, description);
        producto = await Product.create({
            title,
            price,
            description
        });
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllProducts = async (request, response) => {
    try {
        const products = await Product.find({})
        response.json(products);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}


module.exports.getProduct = async (request, response) => {

    try {
        const producto = await Product.findOne({ _id: request.params.id })
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }

}

module.exports.updateProduct = async (request, response) => {
    try {
        const producto = await Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteProduct = async (request, response) => {

    try {
        const producto = await Product.deleteOne({ _id: request.params.id })
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
    
}

