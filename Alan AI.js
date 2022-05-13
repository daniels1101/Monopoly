
var alanBtnInstance = alanBtn({
    key: "090ea5192f4efd4f4abda0a537d44f712e956eca572e1d8b807a3e2338fdd0dc/stage",
    authData: {data:"your auth data if needed"},
    onCommand: function (commandData) {
      if (commandData.command === "go:back") {
        //call client code that will react on the received command
      }
    },
	onCommand: function (commandData){
	  if (commandData.command === 'Start'){
		setup()
		}
	},
    onCommand: function (commandData){
        if (commandData.command === 'Alanplayernumber'){
            document.getElementById('playernumber').value = 2
            playernumber_onchange()
          }
      },
    
    rootEl: document.getElementById("alan-btn"),
  });
  //this is how you can set up a visual state
  alanBtnInstance.setVisualState({data:"your data"});

  //this is how you can call projectAPI.funcName function
  alanBtnInstance.callProjectApi("script::funcName", {data:"your data"}, function(error, result){
    //handle error and result here
  });

  //this is how you can play some text
  

  //this is how you can send a command
  alanBtnInstance.playCommand({action:"openSomePage"});

  //this is how you can turn on the Alan Button programmatically
  alanBtnInstance.activate().then(()=> {
      //this is how you can play some text
      alanBtnInstance.playText("Welcome");
  });

  //this is how you can turn off the Alan Button programmatically
  alanBtnInstance.deactivate();