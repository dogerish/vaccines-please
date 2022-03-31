const $ = id => document.getElementById(id);

function backstory()
{
	$("title-screen").classList.add("hidden");
	$("backstory-screen").classList.remove("hidden");
}
function backstoryContinue()
{
	$("backstory-screen").classList.add("hidden");
	decisions();
}
function decisions()
{
	// show news and decisions element
}
function results()
{
	// show results element
}
function endgame()
{
	// show endgame element
}

$("wear-mask").onclick = function(e) { $("play-button").disabled = !this.checked; }
