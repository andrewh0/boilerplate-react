module.exports = function(app, express) {
  app.get('/', function(req, res, next) {
    res.sendFile('index.html');
    next();
  });
}
