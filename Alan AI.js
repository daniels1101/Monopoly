var alanBtnInstance = alanBtn({
    key: "090ea5192f4efd4f4abda0a537d44f712e956eca572e1d8b807a3e2338fdd0dc/stage",
    authData: {data:"your auth data if needed"},
    onCommand: function (commandData) {
      if (commandData.command === "go:back") {
        //call client code that will react on the received command
      }
    },
  onCommand: function (commandData){
    AlanStartGame(commandData.command)
    AlanSelectPlayer(commandData.command)
    AlanChangeColor(commandData.command, commandData.payload)
    AlanChangePlayerName(commandData.command, commandData.payload)
    AlanChangePlayerai(commandData.command, commandData.payload)
    AlanRollDice(commandData.command)
    AlanEndTurn(commandData.command)
    AlanViewStats(commandData.command)
    AlanCloseStats(commandData.command)
    AlanClosePopup(commandData.command)
    AlanBid(commandData.command, commandData.payload)
    AlanPass(commandData.command)
    AlanExitAuction(commandData.command)
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
  
//Functions
function AlanStartGame(cmd){
  if (cmd === 'Start'){
		setup()
		}
}
function AlanSelectPlayer(cmd){
  if (cmd.includes('Alanplayernumber') ){
    console.log(cmd.replace('Alanplayernumber','')) 
    document.getElementById('playernumber').value = cmd.replace('Alanplayernumber','')
      playernumber_onchange()
   }
}
function AlanChangeColor(cmd, pyd){
  if (cmd === 'AlanPlayerColor'){
    document.getElementById('player'+pyd.AlanColorNumber +'color').value = pyd.AlanColorName[0].toUpperCase()+pyd.AlanColorName.substring(1)
        }
      }

function AlanChangePlayerName(cmd, pyd){
  if (cmd === 'AlanPlayerName'){
    document.getElementById('player'+ pyd.PlayerNumber +'name').value = pyd.PlayerName[0].toUpperCase()+pyd.PlayerName.substring(1)
        }
 }
 
function AlanChangePlayerai(cmd, pyd){
  if (cmd === 'AlanPlayerai'){
    document.getElementById('player'+ pyd.ainumber +'ai').value = pyd.Playerai
        }
 }

 function AlanRollDice(cmd){
   if(cmd == 'RollDice'){
    roll()
   }
 }
 function AlanEndTurn(cmd){
  if(cmd == 'EndTurn'){
   play()
  }
  }

  function AlanViewStats(cmd){
  if (cmd == 'ViewStats'){
   showStats()
  }
  } 
  function AlanCloseStats(cmd){
    if (cmd == 'CloseStats'){
     closeStats()
    }
   } 
  function AlanClosePopup(cmd){
    if(cmd == 'ClosePopUp'){
      popupclose.click()
    }
  }
  function AlanBid(cmd, pyd){
    if(cmd == 'BidNumber'){
      document.getElementById('bid').value = pyd.BidNumber
      game.auctionBid()
    }
  }
  function AlanPass(cmd){
    if(cmd == 'PassBid'){
      game.auctionPass()
    }
  }
  
  function AlanExitAuction(cmd){
    if(cmd == 'ExitAuction'){
       game.auctionExit()
    }
  }

