
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
      if (commandData.command.includes('Alanplayernumber') ){
        console.log(commandData.command.replace('Alanplayernumber','')) 
        document.getElementById('playernumber').value = commandData.command.replace('Alanplayernumber','')
          playernumber_onchange()
       }
      ChangeColor(commandData.command)
      ChangePlayerName(commandData.command, commandData.payload)
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

  function ChangeColor(cmd){
  if (cmd.includes('AlanPlayer') && cmd.includes('Color')){
    var Colorvar = cmd.split('Color')
    document.getElementById('player'+Colorvar[0].replace('AlanPlayer','') +'color').value = Colorvar[1][0].toUpperCase()+Colorvar[1].substring(1)
        }
      }

 function ChangePlayerName(cmd, pyd){
  if (cmd === 'AlanPlayerName'){
    document.getElementById('player'+ pyd.PlayerNumber +'name').value = pyd.PlayerName[0].toUpperCase()+pyd.PlayerName.substring(1)
        }
 }
 
 /*function ChangePlayerName(cmd){
  if (cmd.includes('AlanPlayerN') && cmd.includes('Name')){
    var Namevar = cmd.split('Name')
    document.getElementById('player'+Namevar[0].replace('AlanPlayerN','') +'name').value = Namevar[1][0].toUpperCase()+Namevar[1].substring(1)
        }
 }*/