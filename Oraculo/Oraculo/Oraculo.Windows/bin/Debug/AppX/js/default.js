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
	    var nsorte = Math.floor((Math.random() * total) );
	    titulo.innerHTML = nome.value.toUpperCase() + " Sua Sorte é:" ;
	    // nome.value +
	    sorte.innerHTML = frases[nsorte];

	    
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
            frases = [
                "Motivação não é sinônimo de transformação, mas um passo em sua direção.",
                "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.",
                "Inspiração vem dos outros. Motivação vem de dentro de nós.",
                "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas habituais.",
                "A nossa vida tem 4 sentidos…amar, sofrer, lutar e vencer.",
                " Ame muito, sofra pouco,lute bastante e vença sempre!",
                "Nada é por acaso…Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..",
                "Acredite em milagres, mas não dependa deles.", "Você sempre será a sua melhor companhia!",
                "Realize o óbvio, pense no improvável e conquiste o impossível Latumia.",
                "A vida quando é levada com verdades se torna muito mas leve",
                "Quem não corre atras de seus sonhos, um dia vai correr atras dos sonho alheios.",
                "So não muda de opinião quem não as tem!",
                "Em terra de cego quem tem olhos é Rei.",
                "criticar sempre é bem mas facil do que tentar fazer melhor.' programador ' ",
                "respeitar pai e mãe sempre", "Ninguém vem ao pai a não ser por mim!", "Não há que ser forte. Há que ser flexível.",
                "Gente todo dia arruma os cabelos, por que não o coração?",
                "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
                "Melhor pensar alto do que não pensar nada.",
                "A juventude não é uma época da vida, é um estado de espírito.",
                " Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
                "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.",
                "A vida trará coisas boas se tiveres paciência",
                "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
                "Não compense na ira o que lhe falta na razão.",
                "Defeitos e virtudes são apenas dois lados da mesma moeda.",
                "A maior de todas as torres começa no solo.",
                "Não há que ser forte. Há que ser flexível.",
                "Siga os bons e aprenda com eles.",
                "Não importa o tamanho da montanha, ela não pode tapar o sol.",
                "O bom-senso vai mais longe do que muito conhecimento.",
                "Quem quer colher rosas deve suportar os espinhos.",
                "São os nossos amigos que nos ensinam as mais valiosas lições.",
                "Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.",
                "Aquele que se importa com o sentimento dos outros, não é um tolo.",
                "A adversidade é um espelho que reflete o verdadeiro eu.",
                "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
                "Uma bela flor é incompleta sem suas folhas.",
                "Sem o fogo do entusiasmo, não há o calor da vitória.",
                "Não há melhor negócio que a vida. A gente há obtém a troco de nada.",
                "O riso é a menor distância entre duas pessoas.",
                "A adversidade é um espelho que reflete o verdadeiro eu.",
                "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
                "Não há melhor negócio que a vida. A gente há obtém a troco de nada.",
                "O riso é a menor distância entre duas pessoas.",
                "Vencer é 90 por cento suor e 40 por cento técnica.",
                "O amor está mais próximo do que você imagina.",
                "Nunca se fique triste por se apaixonar",
                "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.",
                "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
                "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
                "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.",
                "A vida é para quem topa qualquer parada. Não para quem pára em qualquer topada.",
                "Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.",
                "É mais fácil conseguir o perdão do que a permissão.",
                "Os defeitos são mais fortes quando o amor é fraco.",
                "Amizade e Amor são coisas que podem virar uma só num piscar de olhos.",
                "Surpreender e ser surpreendido é o segredo do amor.",
                "Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.",
                "Todo mundo é capaz de denominar uma dor, exceto quem a sente."];

            // o ultimo signo estraido foi o leaos continuar apartir do proximo no github


        }
    };



    app.start();
})();