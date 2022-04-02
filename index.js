const $ = id => document.getElementById(id);
var decisionIndex;
var family = new Family();

function backstory()
{
	$("title-screen").classList.add("hidden");
	$("backstory-screen").classList.remove("hidden");
}
function backstoryContinue()
{
	decisions();
}
function decisions()
{
	$("backstory-screen").classList.add("hidden");
	$("result-screen").classList.add("hidden");

	decisionIndex = Math.floor(Math.random() * samples.length);
	$("news-half").innerHTML = samples[decisionIndex].news.reduce((p, e) => p + substituteKeys(newsTemplate, e), "");
	

	$("decision-image").setAttribute("src", samples[decisionIndex].decision.image);
	$("decision-prompt").innerText = samples[decisionIndex].decision.prompt;

	// show news and decisions element
	$("decision-screen").classList.remove("hidden");
}
function results(response)
{
	family.update();
	$("decision-screen").classList.add("hidden");
	$("result-screen").classList.remove("hidden");
	var result = samples[decisionIndex].result[response];
	family.evalResult(result);
	$("result-title").innerHTML = result.description;
	$("result-image").setAttribute("src", result.image);
	for(let member of Object.keys(family)){
		$(`result-${member}`).innerText = family[member].statusString();
	}

	if(family.father.status == "dead"){
		$("result-button").innerText = "Go to coffin";
		$("result-button").onclick = endgame;
	}
	else{
		$("result-button").innerText = "Go to bed";
		$("result-button").onclick = decisions;
	}
}
function endgame()
{
	// show endgame element
}


function cancelSource(e){
	e.parentNode.classList.add("hidden");
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
		// BUGTESTER: skip to a certain page
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