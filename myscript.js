//Player 1 Dicee Number Generation and Image Change

var player_1_DiceeNumber = Math.floor (Math.random () * 6) + 1;

var diceeImgNumber_1 = "images/dice" + player_1_DiceeNumber + ".png";

document.querySelector("img.dicee-img-1").setAttribute("src", diceeImgNumber_1);

//Player 2 Dicee Number Generation and Image Change

var player_2_DiceeNumber = Math.floor (Math.random () * 6) + 1;

var diceeImgNumber_2 = "images/dice" + player_2_DiceeNumber + ".png";

document.querySelector("img.dicee-img-2").setAttribute("src", diceeImgNumber_2);

//Change the header

if (diceeImgNumber_1 == diceeImgNumber_2) {
  document.querySelector("h1").innerHTML = "Draw!";

} else if (diceeImgNumber_1 > diceeImgNumber_2) {
  document.querySelector("h1").innerHTML = "Player 1 WINs!";

} else { //(diceeImgNumber_1 < diceeImgNumber_2)
  document.querySelector("h1").innerHTML = "Player 2 WINs!";
}
