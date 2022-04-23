function calculaPontos() {
    var team = document.getElementByid("idTeam").value;
    var position = parseInt(document.getElementById("idPosition").value);
    
    var positionPt = 0;

    if (position >= 16) {
        positionPt = 0;
    } else if (position >= 11 && position < 16) {
        positionPt = 1;
    } else if (position >= 8 && position < 10) {
        positionPt = 2;
    } else if (position >= 6 && position < 7) {
        positionPt = 3;
    } else if (position == 5) {
        positionPt = 4;
    } else if (position == 4) {
        positionPt = 5;
    } else if (position == 3) {
        positionPt = 7;
    } else if (position == 2) {
        positionPt = 9;
    } else if (position == 1){
        positionPt = 12;
    }
    var kill = parseInt(document.getElementById("idKill").value);
    
    if (kill >= 10) {
        positionPt = positionPt + 10;
    } else {
        positionPt = positionPt + kill;
    }

    document.getElementById("idResultadoT").innerHTML = "Team: "+team;
    document.getElementById("idTeam1").innerHTML = team;
    document.getElementById("idResultadoP").innerHTML = "Position: "+position;
    document.getElementById("idResultadoK").innerHTML = "Kills: "+kill;
    document.getElementById("idResultado").innerHTML = "points: "+positionPt;


}

