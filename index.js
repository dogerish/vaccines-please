// button functions
function cancelSource(e){
	e.parentNode.classList.add("hidden");
}
function updatePlayButton(e) { $("play-button").disabled = !e.checked; }

let game = new Game();

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
		// BUGTESTER: skip to a certain page
		case "skipto":
			eval(`game.swapScreens(${param[1]})`);
			break;
		// BUGTESTER: automatically execute javascript
		case "autoexec":
			eval(param[1]);
			break;
		// BUGTESTER: automatically select decision index
		case "di":
			let i = Number.parseInt(param[1]);
			game.index = i - 1;
			break;
		// BUGTESTER: find decision based on search;
		// just finds the first one where the beggining of the date starts with the parameter
		case "ds":
			for (let i = 0; i < plot.length; i++)
			{
				if (plot[i].date.startsWith(param[1]))
				{
					game.index = i - 1;
					break;
				}
			}
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
evalParams(window.location.href.slice(window.location.href.indexOf('?') + 1));
