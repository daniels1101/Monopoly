function ValidatePlayerNumber(number, min, max, p){
    if(number > max){
       p.play('The maximun player number is ' + max) 
       return false
    }
    else if(number < min){
       p.play('The minimun player number is ' + min) 
       return false
    }
    else {
       return true
    }
}

function ValidateMoney(number, min, max, p){
    if(number < min){
        p.play('You can not bet'+ min +'dollars ') 
       return false
    }
    else {
       return true
    }
}

function ReplaceNumber(number){
    if(number == 'one'){
        number = 1
    }
    else if(number == 'two'){
        number = 2
    }
    else if(number == 'three'){
        number = 3
    }
    else if(number == 'four'){
        number = 4
    }
    else if(number == 'five'){
        number = 5
    }
    else if(number == 'six'){
        number = 6
    }
    else if(number == 'seven'){
        number = 7
    }
     else if(number == 'eigth'){
        number = 8
    }
    
    return number

}

function AIorHUMAN(str){
    str = str.toLowerCase()
    if(str == 'ai' || str == 'AI' ){
        str = 1
    }
    if(str == 'human' || str == 'HUMAN'){
        str = 0
    }
    return str
}

intent('select $(AlanPlayers NUMBER) (players|slots)', p => {
    p.AlanPlayers.value = ReplaceNumber(p.AlanPlayers.value)
    if(ValidatePlayerNumber(p.AlanPlayers.value,2,8, p)){
       p.play('selecting ' + p.AlanPlayers.value + ' (players|slots)');
       p.play({command: 'Alanplayernumber'+ p.AlanPlayers.value})
    }
    
});

intent('change to $(ColorName Aqua|Black|Blue|Fuchsia|Gray|Green|Lime|Maroon|Navy|Olive|Orange|Purple|Red|Silver|Teal) ' +
      'the player $(ColorNumber NUMBER)', p => {
       p.ColorNumber.value = ReplaceNumber(p.ColorNumber.value)
       if(ValidatePlayerNumber(p.ColorNumber.value,1,8, p)){
            p.play('Changing player ' + p.ColorNumber.value + ' to color ' + p.ColorName.value);
            p.play({command: 'AlanPlayerColor', payload:{AlanColorNumber: p.ColorNumber.value, AlanColorName: p.ColorName.value}})
       }
});


intent('the name of player number $(NameNumber NUMBER) is $(NameChange* (.+))', p => {
    p.NameNumber.value = ReplaceNumber(p.NameNumber.value)
    if(ValidatePlayerNumber(p.NameNumber.value,1,8, p)){
      p.play('Changing player ' + p.NameNumber.value + ' to the name ' + p.NameChange.value);
      p.play({command: 'AlanPlayerName', payload: {PlayerNumber: p.NameNumber.value, PlayerName: p.NameChange.value}}) 
    }
});

intent(' $(ainumber NUMBER) is going to be (a|an) $(Playerai ai|human)', p => {
    p.ainumber.value = ReplaceNumber(p.ainumber.value)  
    if(ValidatePlayerNumber(p.ainumber.value,1,8, p)){
      p.play('Changing player ' + p.ainumber.value + ' to ' + p.Playerai.value);
      p.Playerai.value = AIorHUMAN(p.Playerai.value) 
      p.play({command: 'AlanPlayerai', payload: {ainumber: p.ainumber.value, Playerai: p.Playerai.value}}) 
    }
});

intent('Start Game', p => {
    p.play({command: 'Start'})
    p.play('(Starting)');
    p.then(Game);
   
});

    
let Game = context(() => {
    
intent('Roll (Dice|Again)', p => {
    p.play('Rolling dice');
    p.play({command: 'RollDice'})    
});
    
intent('End Turn', p => {
    p.play('Ending Turn');
    p.play({command: 'EndTurn'})
}); 

intent('View Stats', p => {
    p.play('Showing stats');
    p.play({command: 'ViewStats'})

});
    
intent('Close Stats', p => {
    p.play('Closing stats');
     p.play({command: 'CloseStats'})
});

intent('OK', p => {
    p.play('Sure');
    p.play({command: 'ClosePopUp'})
}); 

intent(' Bid  $(BidNumber NUMBER) (dollar|dollars)', p => {
    p.BidNumber.value = ReplaceNumber(p.BidNumber.value)  
    if(ValidateMoney(p.BidNumber.value,0,50000, p)){
      p.play('Bidding ' + p.BidNumber.value);
      p.play({command: 'BidNumber', payload: {BidNumber: p.BidNumber.value}}) 
    }
});
    
intent('Pass', p => {
      p.play('Passing');
      p.play({command: 'PassBid'}) 
});

intent('Exit Auction', p => {
      p.play('Exiting Auction');
      p.play({command: 'ExitAuction'}) 
});
    
intent('Open the buy tab', p => {
      p.play('Opening buy Tab');
      p.play({command: 'OpenBuyTab'}) 
});
    
intent('Open the manage tab', p => {
      p.play('Opening manage Tab');
      p.play({command: 'OpenManageTab'}) 
});
    
intent('Open the trade tab', p => {
      p.play('Opening Trade Tab');
      p.play({command: 'OpenTradeTab'}) 
      p.then(Trade);
});

let Trade = context(() => {

    intent('Propose Trade', p => {
      p.play('Proposing Trade');
      p.play({command: 'ProposeTrade'}) 
      p.then(Trade);
    });

    intent('Cancel Trade', p => {
      p.play('Canceling Trade');
      p.play({command: 'CancelTrade'}) 
      p.resolve();
    });
    });
});
