// Para uma introdução ao modelo em branco, consulte a seguinte documentação:
//
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;



    var splash = null; // Variable to hold the splash screen object. 
    var dismissed = false; // Variable to track splash screen dismissal status. 
    var coordinates = { x: 0, y: 0, width: 0, height: 0 };// = null;// // Object to store splash screen image coordinates. It will be initialized during activation.
    var scenarios = [{
        url: "",
        title: ""
    }, {
        url: "",
        title: ""
    }];


    app.onactivated = function (args) {

        

        
    var signos = ["Direto do Alem", "Aries", "Touro","Gemeos", "Cancer", "Goku ","Leao", "Virgem", "Libra", "Escorpiao","Sagitario", "Capricornio", "Aquario", "Peixe"]
    var frases;
   

    
      
    var animated;
    var nome = document.getElementById("nome");
    var btsorte = document.getElementById("btgerasorte");
    var titulo = document.getElementById("titulo");
    var select = document.getElementById("selecao");
    var sorte = document.getElementById("sorte");
    var box = document.getElementById("box");
    box.style.visibility = "hidden";
    setTimeout(tornaVisivel, 11000);

    

	carregarFrases();

	var total = frases.length;
	
     

	btsorte.addEventListener("click", gerasorte);

	function gerasorte() {
	    var nsorte = Math.floor((Math.random() * total) );
	    titulo.innerHTML = nome.value.toUpperCase() + " Sua Sorte é:" ;
	    // nome.value +
	    sorte.innerHTML = frases[nsorte] + '100px' + splash.imageLocation.height + "px";
	    animated = WinJS.UI.Animation.enterPage([titulo, sorte], null);


	    
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




        
            if (args.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
                // Retrieve splash screen object
               splash = args.detail.splashScreen;

                // Retrieve the window coordinates of the splash screen image.
               SdkSample.coordinates = splash.imageLocation;

                // Register an event handler to be executed when the splash screen has been dismissed.
                splash.addEventListener("dismissed", onSplashScreenDismissed, false);

                // Create and display the extended splash screen using the splash screen object.
                ExtendedSplash.show(splash);

                // Listen for window resize events to reposition the extended splash screen image accordingly.
                // This ensures that the extended splash screen is formatted properly when the window is resized.
                window.addEventListener("resize", onResize, false);

                // Use setPromise to indicate to the system that the splash screen must not be torn down
                // until after processAll and navigate complete asynchronously.
                args.setPromise(WinJS.UI.processAll().then(function () {
                    // Navigate to either the first scenario or to the last running scenario
                    // before suspension or termination.
                    var url = WinJS.Application.sessionState.lastUrl || scenarios[0].url;
                    return WinJS.Navigation.navigate(url);
                }));
            }
        }

    

    function onSplashScreenDismissed() {
        // Include code to be executed when the system has transitioned from the splash screen to the extended splash screen (application's first view).
        SdkSample.dismissed = true;

        setTimeout(ExtendedSplash.remove, 10000)
        // Tear down the app's extended splash screen after completing setup operations here...
        // In this sample, the extended splash screen is torn down when the "Learn More" button is clicked.
        //document.getElementById("learnMore").addEventListener("click", ExtendedSplash.remove, false);
    }

    // Removes the extended splash screen if it is currently visible.
    function remove() {
        if (isVisible()) {
            var splashEstendida = document.getElementById("splashEstendida");
            WinJS.Utilities.addClass(splashEstendida, "hidden");
        }
    }



    // Displays the extended splash screen. Pass the splash screen object retrieved during activation.
    function show(splash) {
        var extendedSplashImage = document.getElementById("imgSplashEstendida");

        // Position the extended splash screen image in the same location as the system splash screen image.
        extendedSplashImage.style.top = splash.imageLocation.y + "px";
        extendedSplashImage.style.left = splash.imageLocation.x + "px";
        extendedSplashImage.style.height =  splash.imageLocation.height + "px";
        extendedSplashImage.style.width =  splash.imageLocation.width + "px";

        // Position the extended splash screen's progress ring. Note: In this sample, the progress ring is not used.
        /*
        var extendedSplashProgress = document.getElementById("extendedSplashProgress");
        extendedSplashProgress.style.marginTop = splash.imageLocation.y + splash.imageLocation.height + 32 + "px";
        */

        // Once the extended splash screen is setup, apply the CSS style that will make the extended splash screen visible.
        var extendedSplashScreen = document.getElementById("splashEstendida");
        WinJS.Utilities.removeClass(extendedSplashScreen, "hidden");
    }


    function onResize() {
        // Safely update the extended splash screen image coordinates. This function will be fired in response to snapping, unsnapping, rotation, etc...
        if (splash) {
            // Update the coordinates of the splash screen image.
            SdkSample.coordinates = splash.imageLocation;
            ExtendedSplash.updateImageLocation(splash);
        }
    }


    function updateImageLocation(splash) {
        if (isVisible()) {
            var extendedSplashImage = document.getElementById("imgSplashEstendida");

            // Position the extended splash screen image in the same location as the system splash screen image.
            extendedSplashImage.style.top = splash.imageLocation.y + "px";
            extendedSplashImage.style.left = splash.imageLocation.x + "px";
            extendedSplashImage.style.height = splash.imageLocation.height + "px";
            extendedSplashImage.style.width = splash.imageLocation.width + "px";

            // Position the extended splash screen's progress ring. Note: In this sample, the progress ring is not used.
            /*
            var extendedSplashProgress = document.getElementById("extendedSplashProgress");
            extendedSplashProgress.style.marginTop = splash.imageLocation.y + splash.imageLocation.height + 32 + "px";
            */
        }
    }

    // Checks whether the extended splash screen is visible and returns a boolean.
    function isVisible() {
        var extendedSplashScreen = document.getElementById("splashEstendida");
        return !(WinJS.Utilities.hasClass(extendedSplashScreen, "hidden"));
    }
    function tornaVisivel() {
        box.style.visibility = "visible";
        box.style.transition = "width 2s, height 2s"
        box.addEventListener("hover", mudaTamanho);
    }
    function mudaTamanho(){
        box.style.width = "500px";
        box.style.height = "500px";
     
    }

    WinJS.Namespace.define("SdkSample", {
        // sampleTitle: sampleTitle,
        //  scenarios: new WinJS.Binding.List(scenarios),
       dismissed: dismissed,
       coordinates: coordinates,
    });

    WinJS.Namespace.define("ExtendedSplash", {
        show: show,
        updateImageLocation: updateImageLocation,
        isVisible: isVisible,
        remove: remove
    });
   
    app.start();
})();