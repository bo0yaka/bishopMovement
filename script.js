function possibleMove(startField, endField) {

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var lettersLength = letters.length;
    var fromLetter = startField.charAt(0);
    var toLetter = endField.charAt(0);
    var fromNumber = parseInt(startField.charAt(1));
    var toNumber = parseInt(endField.charAt(1));
    var startLetter = letters.indexOf(fromLetter);
    var possibleField;
    var firstPossibleDiagonal = possibleMoveThroughDiagonalLeftAndUp(startField, endField);
    var secondPossibleDiagonal = possibleMoveThroughDiagonalLeftAndDown(startField, endField);
    var thirdPossibleDiagonal = possibleMoveThroughDiagonalRightAndUp(startField, endField);
    var fourthPossibleDiagonal = possibleMoveThroughDiagonalRightAndDown(startField, endField);
    
    if(firstPossibleDiagonal)
        console.log ("Your bishop can move through diagonal left and up to field " + endField);
        
    else if(secondPossibleDiagonal)
        console.log ("Your bishop can move through diagonal left and down to field " + endField);
        
    else if(thirdPossibleDiagonal)
        console.log ("Your bishop can move through diagonal right and up to field " + endField);
        
    else if(fourthPossibleDiagonal)
        console.log ("Your bishop can move through diagonal right and down to field " + endField);
    
    else
        console.log ("First you should learn basics of chess game, please!");
}

possibleMove("e3", "a7");
possibleMove("e3", "c1");
possibleMove("e3", "h6");
possibleMove("e3", "g1");
possibleMove("e3", "h3");


function possibleMoveThroughDiagonalLeftAndUp(startField, endField) {
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var lettersLength = letters.length;
    var fromLetter = startField.charAt(0);
    var toLetter = endField.charAt(0);
    var fromNumber = parseInt(startField.charAt(1));
    var toNumber = parseInt(endField.charAt(1));
    var startLetter = letters.indexOf(fromLetter);
    var possibleField;
    
        for (i=startLetter; fromNumber<lettersLength; i--){
            possibleField = "";
            fromNumber += 1;
            possibleField += letters[i-1] + fromNumber;
            if (possibleField === endField)
                return true;
                
        }

}

//possibleMoveThroughDiagonalLeftAndUp("h1", "c6");

function possibleMoveThroughDiagonalLeftAndDown(startField, endField) {
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var lettersLength = letters.length;
    var fromLetter = startField.charAt(0);
    var toLetter = endField.charAt(0);
    var fromNumber = parseInt(startField.charAt(1));
    var toNumber = parseInt(endField.charAt(1));
    var startLetter = letters.indexOf(fromLetter);
    var possibleField;
    
        for (i=startLetter; fromNumber>1; i--){
            possibleField = "";
            fromNumber -= 1;
            possibleField += letters[i-1] + fromNumber;
            if (possibleField === endField)
                return true;
        }

}

//possibleMoveThroughDiagonalLeftAndDown("f4", "c1");

function possibleMoveThroughDiagonalRightAndUp(startField, endField) {
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var lettersLength = letters.length;
    var fromLetter = startField.charAt(0);
    var toLetter = endField.charAt(0);
    var fromNumber = parseInt(startField.charAt(1));
    var toNumber = parseInt(endField.charAt(1));
    var startLetter = letters.indexOf(fromLetter);
    var possibleField;
    
        for (i=startLetter; fromNumber<lettersLength; i++){
            possibleField = "";
            fromNumber += 1;
            possibleField += letters[i+1] + fromNumber;
            if (possibleField === endField)
                return true;
        }

}
    
//possibleMoveThroughDiagonalRightAndUp("b3", "g8");

function possibleMoveThroughDiagonalRightAndDown(startField, endField) {
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var lettersLength = letters.length;
    var fromLetter = startField.charAt(0);
    var toLetter = endField.charAt(0);
    var fromNumber = parseInt(startField.charAt(1));
    var toNumber = parseInt(endField.charAt(1));
    var startLetter = letters.indexOf(fromLetter);
    var possibleField;
    
        for (i=startLetter; fromNumber>1; i++){
            possibleField = "";
            fromNumber -= 1;
            possibleField += letters[i+1] + fromNumber;
            if (possibleField === endField)
                return true;
        }

}

//possibleMoveThroughDiagonalRightAndDown("d8", "c1");

// diagonala levo gor (črka se zmanjšuje, cifra se povečuje)
// diagonala desno gor (črka se povečuje, cifra se povečuje)
// diagonala levo dol (črka se zmanjšuje, cifra se zmanjšuje)
// diagonala desno dol (črka se povečuje, cifra se zmanjšuje)