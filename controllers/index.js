const items = [
    {id: 1, name: 'product 1'},
    {id: 2, name: 'product 2'},
    {id: 3, name: 'product 3'}
];

const index = (req, res) => {
    res.render('index.ejs', {
        title: 'My WebStore',
        greet: 'Welcome'
    });
}

const listOfProducts = (req, res, next) => {
    res.render('products', {
        title: 'List of products',
        items: items
    });
}

const newProduct = (req, res, next) => {
    const { newItem } = req.body;
    items.push({
        id: items.length + 1,
        name: newItem
    });
    res.redirect('/products');
}

module.exports = {
    index,
    listOfProducts,
    newProduct
}