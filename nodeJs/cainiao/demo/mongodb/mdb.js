var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/runoob";

var insertData = function(db, callback) {
    // 连接到site
    var collection = db.collection('site');
    // 插入数据

    var data = [{
        "name": "小朋友",
        "age": 12
    }, {
        "name": "大灰狼",
        "age": 11
    }];
    collection.insert(data, function(err, result) {
        if (err) {
            console.log('Error' + err);
            return;
        }
        callback(result);
    })
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    })
})