// Para uma introdução ao modelo em branco, consulte a seguinte documentação:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {

        
            var titulo = document.getElementById("titulo");
            titulo.innerHTML = "<h3>Testando4</h3>";
       






    };



    app.start();
})();