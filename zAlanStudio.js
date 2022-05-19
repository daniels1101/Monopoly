// Use this sample to create your own voice commands
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
    p.then(EndTurn);
    
});
});
let EndTurn = context(() => {
    
intent('End Turn', p => {
    p.play('Ending Turn');
    p.play({command: 'EndTurn'})
   p.then(Game);
});
});
