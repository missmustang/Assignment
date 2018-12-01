var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('localhost:27017/productlist', ['productlist']);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/productlist/:query', function (req, res) {
    console.log("I received a GET request");
    console.log(req.params.query);
    if (req.params.query === "{}") {
        db.productlist.find(function (err, docs) {
            console.log(docs);
            res.json(docs);
        });
        return;
    }
    query = JSON.parse(req.params.query);
    console.log("query, ", query);
    db.productlist.find(query, function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/productlist', function (req, res) {
    console.log(req.body);
    db.productlist.insert(req.body, function (err, doc) {
        res.json(doc);
    });
});

app.delete('/productlist/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.productlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.get('/productlist/:id', function (req, res) {
    var id = req.params.id;
    console.log("get product list, ", id);
    db.productlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/productlist/:id', function (req, res) {
    console.log("put productlist", req.params);
    var id = req.params.id;
    console.log("put product list, ", id);
    var name = req.body.Name;
    console.log("req.body.Name", req.body.Name);
    db.productlist.findAndModify({
        query: {ID: id},
        update: {$set: {ID: req.body.ID, Name: req.body.Name, Quantity: req.body.Quantity}},
        new: true
    }, function (err, doc) {
        res.json(doc);
    });
});


app.listen(3333);
console.log("Server running on port 3333");
