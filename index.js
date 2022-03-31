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

// evaluates URL parameters from a string
function evalParams(params)
{
	if (!params) return;
	// parse the parmeters
	let qstr = new URLSearchParams(params);
	for (let param of qstr.entries())
	{
		switch (param[0])
		{
		// skip to a certain page
		case "skipto":
			$("title-screen").classList.add("hidden");
			$(param[1]).classList.remove("hidden");
			break;
		// change the theme immediately
		case "theme":
			let s = $("theme-select");
			s.value = param[1];
			s.onchange();
			break;
		}
	}
}
// evaluate parameters in the url
evalParams(window.location.href.substr(window.location.href.indexOf('?') + 1));
