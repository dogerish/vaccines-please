var playButton = document.getElementById("play-button");
function gameStart()
{
	console.log("Game start");
}

document.getElementById("wear-mask").onclick = function(e) { playButton.disabled = !this.checked; }
