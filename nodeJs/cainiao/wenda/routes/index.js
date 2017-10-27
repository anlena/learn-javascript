module.exports = function(app) {

    app.get('/', function(req, res) {
        // res.send("Hello world!");
        // res.sendfile('./views/index.html');
        res.render('index', { title: 'express' })
    });

    app.get('/about', function(req, res) {
        // res.send('admin page');
        // res.sendfile('./views/about.html');
        res.render('about');
    });

    app.get('/article', function(req, res) {
        // res.sendfile('./views/article.html');
        res.render('article')
    });
}