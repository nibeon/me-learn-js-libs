var low = require('lowdb');
var db = low('db/db.json');

db('menu').push({ about: "О сайте", compiles : "Компиляторы JS", languages : "Языки на JS", databases : "Базы данных на JS", libs : "Библиотеки JS" });

db('homepage').push({ title: "О сайте", content: "Данный ресурс посвящается следующим аспектам Java Script:<ul><li>Языки программирования, компилируемые в JavaScript</li><li>Языки программирования, написанные на Java Script для платформы Node.js</li><li>Базы данных, написанные на JavaScript</li><li>Библиотеки JavaScript, реализующие дополнительные возможности Java Script</li></ul>" });

db('comilers').push({ 
    title: "Компиляторы в JavaScript", 
    content: {
        1: {
            compiler: "CoffeScript",
            link: "http://coffeescript.org/",
            description: "Наиболее популярный язык. компилируемый в Javascript. Изначально был написан на Ruby, что повлияло на синтаксис сомого CoffeScript, сделав его похожим на Ruby и Python.",
            ext: ".coffee"
        },
        2: {
            compiler: "ClojureScript",
            link: "https://github.com/clojure/clojurescript/",
            description: "Диалект языка Clojure, который позволяет кот, написанный на Clojure транслировать в JavaScript",
            ext: ".cljs"
        },
        3: {
            compiler: "TypeScript",
            link: "http://www.typescriptlang.org/",
            description: "Язык, транслируемый в Javascript, написанный в недрах Micrisoft. Синтасис испытал влияние C#.",
            ext: ".ts"
        },
        4: {
            compiler: "Dart",
            link: "http://www.dartlang.org/",
            description: "Язык программирования созданный гуглом в качестве замены JavaScript. Обладает строкой типизацией, испытал влияние Java, CoffeScript и Go. Также есть среда разработки для этого языка - Dart SDK",
            ext: ".dart"
        },
        5: {
            compiler: "LiveScript",
            link: "http://livescript.net/",
            description: "Функциональный язык программирования, компилируемый в Javascript. Был вдохновлен Haskell, CoffeeScript, F#.",
            ext: ".ls"
        },
        6: {
            compiler: "Opal",
            link: "http://opalrb.org/",
            description: "Компилятор Ruby в Js",
            ext: "ruby"
        },
        7: {
            compiler: "Scala.js",
            link: "http://www.scala-js.org/",
            description: "Компилятор из Scala в Js",
            ext: ".scala"
        }, 
        8: {
            compiler: "Pure Script",
            link: "http://www.purescript.org/",
            description: "PureScript is a small strongly, statically typed programming language with expressive types, written in and inspired by Haskell, and compiling to Javascript.",
            ext: ".hs"
        }, 
        9: {
            compiler: "Opa",
            link: "http://opalang.org/",
            description: "Функциональныйязык со строгой статичиской типизацией, компилируемый в JS. Написан на OCaml.",
            ext: ".opa"
        },
        10: {
            compiler: "Haxe",
            link: "http://haxe.org/",
            description: "Объектно-ориентированный мультипарадигмальный язык, написанный на OCaml, который позволяет компилировать свой код в наиболее известные языки программирования, включая JavaScript. Позволяет писать как лиентские, так и серверные приложения.",
            ext: ".hx"
        },
        11: {
            compiler: "Pythonium",
            link: "https://pypi.python.org/pypi/pythonium/0.4.7",
            description: "Компилятор Python 3 в JavaScript.",
            ext: ".py"
        },
        12: {
            compiler: "Shen",
            link: "https://github.com/synrc/shen",
            description: "Компилятор Erlang в JavaScript.",
            ext: ".erl"
        }
    }                    
                    });



db.save();
