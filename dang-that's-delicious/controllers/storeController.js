
exports.homePage = (req,res) => {
    console.log(req.name)
    res.render('index', {title: "Home Page"});
}

exports.addStore = (req, res) => {
    res.render('editStore', {title: 'Add Store'})
}

exports.createStore = (req, res) => {
    res.json(req.body); // contains all the information sent in the form
}