class Screen
{
	constructor(id, onload, onhide)
	{
		this.el = $(id);
		this.onload = onload;
		this.onhide = onhide;
	}
	hide(ext)
	{
		this.el.classList.add("hidden");
		if (this.onhide != undefined) this.onhide(ext);
	}
	show(ext)
	{
		if (this.onload != undefined) this.onload(ext);
		this.el.classList.remove("hidden");
	}
}

class Game
{
	constructor()
	{
		this.index = 0;
		this.family = new Family();
		this.title = new Screen("title-screen");
		this.backstory = new Screen("backstory-screen");
		let self = this;
		this.decision = new Screen("decision-screen", function()
		{
			this.index = Math.floor(Math.random() * samples.length);
			let sample = samples[self.index];
			$("news-half").innerHTML = sample.news.reduce(
				(p, e) => p + substituteKeys(newsTemplate, e),
				""
			);

			$("decision-image").setAttribute("src", sample.decision.image);
			$("decision-prompt").innerText = sample.decision.prompt;
		});
		this.result = new Screen("result-screen", function(response)
		{
			self.family.update();
			var result = samples[self.index].result[response];
			self.family.evalResult(result);
			$("result-title").innerHTML = result.description;
			$("result-image").setAttribute("src", result.image);
			for(let member of Object.keys(self.family)){
				$(`result-${member}`).innerText = self.family[member].statusString();
			}

			let b = $("result-button");
			if(self.family.father.status == DEAD){
				b.innerText = "Go to coffin";
				b.onclick = () => self.swapScreens('endgame');
			}
			else{
				b.innerText = "Go to bed";
				b.onclick = () => self.swapScreens('decision');
			}
		});
		this.endgame = new Screen("endgame-screen");
		this.now = "title";
	}

	swapScreens(/*String*/ next, hideExt, showExt)
	{
		this[this.now].hide(hideExt);
		this[this.now = next].show(showExt);
	}
}