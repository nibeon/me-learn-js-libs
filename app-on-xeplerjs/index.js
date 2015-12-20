var app = require("xepler")();
// var Higgle = require("higgle");
 
app.on("/", function(req, res) {
    var data = {
        title   : "О сайте",
        message : "Данный ресурс посвящается следующим аспектам Java Script:<ul><li>Языки программирования, компилируемые в JavaScript</li><li>Языки программирования, написанные на Java Script для платформы Node.js</li><li>Базы данных, написанные на JavaScript</li><li>Библиотеки JavaScript, реализующие дополнительные возможности Java Script</li></ul>",
        menu: {
            "about" : "О сайте", 
            "compiles" : "Компиляторы JS", 
            "languages" : "Языки на JS", 
            "databases" : "Базы данных на JS", 
            "libs" : "Библиотеки JS"
        },
    };   
    res.render('about', data);
});

app.on("/:page", function(req, res) {
	res.render('page', {
      "title" : req.params.page
  });
});



     
app.listen();