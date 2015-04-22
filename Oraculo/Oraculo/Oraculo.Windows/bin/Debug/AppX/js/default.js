// Para uma introdução ao modelo em branco, consulte a seguinte documentação:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {

        
    var signos = ["Direto do Alem", "Aries", "Touro","Gemeos", "Cancer", "Leao", "Virgem", "Libra", "Escorpiao","Sagitario", "Capricornio", "Aquario", "Peixe"]
    var frases;
   

    
      
    var nome = document.getElementById("nome");
    var btsorte = document.getElementById("btgerasorte");
    var titulo = document.getElementById("titulo");
    var select = document.getElementById("selecao");
	var sorte = document.getElementById("sorte");
	carregarFrases();
	var total = frases.length;

	btsorte.addEventListener("click", gerasorte);

	function gerasorte() {
	    titulo.innerHTML = "gol 1" + nome.value;
	    
	}
	
	titulo.innerHTML =  "Sua Sorte " + signos.length + " -- total de frases " + total;
	sorte.innerHTML = frases[1];

    var indice;
    
        try {
            for (indice in signos) {
                select.add(new Option(signos[indice], indice), null);
                			
            }
       
        }
        catch (e) {
            titulo.innerHTML += " catch erro- " + e ;
        }

        function carregarFrases() {
             frases = ["Motivação não é sinônimo de transformação, mas um passo em sua direção.","O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.","Inspiração vem dos outros. Motivação vem de dentro de nós.","Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas habituais.","A nossa vida tem 4 sentidos…amar, sofrer, lutar e vencer."," Ame muito, sofra pouco,lute bastante e vença sempre!","Nada é por acaso…Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..","Acredite em milagres, mas não dependa deles.","Você sempre será a sua melhor companhia!","Realize o óbvio, pense no improvável e conquiste o impossível Latumia.","A vida quando é levada com verdades se torna muito mas leve","Quem não corre atras de seus sonhos, um dia vai correr atras dos sonho alheios.  ","So não muda de opinião quem não as tem!","Em terra de cego quem tem olhos é Rei.","criticar sempre é bem mas facil do que tentar fazer melhor.' programador ' ","respeitar pai e mãe sempre","Ninguém vem ao pai a não ser por mim!"];
        }
    };



    app.start();
})();