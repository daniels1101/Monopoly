# Monopoly

A JavaScript/HTML/CSS Monopoly implementation with full voice game play. Supports two-eight players.

Play online at [https://daniels1101.github.io/Monopoly/](https://daniels1101.github.io/Monopoly/).

Includes an experimental capability to play against an AI. A test AI for demonstration purposes is included.

Voice Interactions:

Change Number of Players: select $(AlanPlayers NUMBER) (players|slots)

Change Color: change to $(ColorName Aqua|Black|Blue|Fuchsia|Gray|Green|Lime|Maroon|Navy|Olive|Orange|Purple|Red|Silver|Teal) the player $(ColorNumber NUMBER)

Change Name of Player: the name of player number $(NameNumber NUMBER) is $(NameChange* (.+))

Select AI or Human: $(ainumber NUMBER) is going to be (a|an) $(Playerai ai|human)

Start Game: Start Game{

Roll dice Or Roll Again: Roll (Dice|Again)

End Turn: End Turn

View Stats: View Stats

Close Stats: Close Stats

Ok Button: OK

Bid Tab{
To Bid: Bid  $(BidNumber NUMBER) (dollar|dollars)

To Pass: Pass

To Exit Auction: Exit Auction
}
Change Between Tabs{
Buy Tab: Open the buy tab

Manage Tab: Open the manage tab

Trade Tab: Open the trade tab{

Propose Trade: Propose Trade

Cancel Trade: Cancel Trade
}
}
}



