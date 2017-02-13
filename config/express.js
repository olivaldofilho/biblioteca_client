var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();
    
    //configuração de ambiente
    app.set('port', 10001);
    
    //middleware
    app.use(express.static('./app'));
    //app.set('view engine', 'ejs');
    //app.set('views', './app/partials');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    
    //home(app);    
    /*load('models', {cwd: 'app'})
      .then('controllers')      
      .then('routers')
      .into(app);*/
    
    return app;
};