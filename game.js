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
		this.el.classList.remove("hidden");
		if (this.onload != undefined) this.onload(ext);
	}
}

class Game
{
	constructor()
	{
		this.index = -1;
		this.sideDecision = null; // holds FamilyMember that got sickened on the last turn
		this.activeDecision = null;
		this.date = new Date("1/1/2020");

		this.family = new Family(who => { if (Math.random() < 0.5) this.sideDecision = who; });
		this.updateStatusBar();
		this.title = new Screen("title-screen");
		this.backstory = new Screen("backstory-screen");
		let self = this;
		this.decision = new Screen("decision-screen", function()
		{
			if (self.sideDecision)
				self.activeDecision = nonplot[
					Math.floor(Math.random() * nonplot.length)
				];
			else
			{
				self.activeDecision = plot[++self.index];
				if (self.activeDecision == undefined) return self.swapScreens('endgame');
				self.date = new Date(self.activeDecision.date);
				self.family.update(self.date);
				self.updateStatusBar();
				if (self.family.player.status == DEAD) return self.swapScreens('endgame');
			}
			$("news-feed").innerHTML = substituteKeys(
				self.activeDecision.news.reduce(
					(p, e) =>
					{
						e = { ...e, author: (e.author == undefined) ?  "" : "- " + e.author };
						return p + substituteKeys(newsTemplate, e);
					},
					""
				),
				{ sickened: self.sideDecision?.name }
			);
			$("news-date").innerText = self.date.toDateString();

			$("decision-image").setAttribute("src", self.activeDecision.decision.image);
			$("decision-prompt").innerText = self.activeDecision.decision.prompt;
			$("decision-yes").innerText = self.activeDecision.decision.yes;
			$("decision-no").innerText = self.activeDecision.decision.no;
		});
		this.result = new Screen("result-screen", function(response)
		{
			self.sideDecision = null;
			var result = self.activeDecision.result[response];
			self.family.evalResult(self.date, result);
			self.updateStatusBar();
			$("result-title").innerHTML = result.description;
			$("result-image").setAttribute("src", result.image);
			let list = $("result-list");
			list.innerHTML = self.family.nonPlayerList.reduce((p, member) =>
				p + substituteKeys(statusTemplate, {
					who: member.name, status: member.statusString()
				}),
				""
			);

			let b = $("result-button");
			if(self.family.player.status == DEAD){
				b.innerText = "Go to coffin";
				b.onclick = () => self.swapScreens('endgame');
			}
			else{
				b.innerText = "Go to bed";
				b.onclick = () => self.swapScreens('decision');
			}
		});
		this.endgame = new Screen("endgame-screen", function(){
			var deadFamily = "";
			var livingFamily = "";
			self.family.nonPlayerList.forEach(member => {
				(member.status == DEAD) ? deadFamily += `<br>- your ${member.name} died from ${member.sickness}`: livingFamily += `<br>- your ${member.name}`;
			});
			if(self.family.player.status == DEAD){
				(livingFamily == "") ? $("endgame-image").classList.remove("hidden") : $("endgame-image").classList.add("hidden")
				$("endgame-result").innerHTML = "You died";
				$("endgame-details").innerHTML = `you survived for ${self.date.getMonth()} months. <br>people who are left to take care of themselves${livingFamily}`
			}else{
				$("endgame-result").innerHTML = "You survived";
				$("endgame-details").innerHTML = `You made it through the pandemic along with ${livingFamily != "" ? livingFamily : "nobody"}<br> ${deadFamily != "" ? "family that died" + deadFamily : ""}`;
			}
		});
		this.now = "title";
	}

	updateStatusBar()
	{
		$("clock").innerText = this.date.toLocaleDateString();
		$("player-status").innerText = "You are " + this.family.player.statusString();
	}
	swapScreens(/*String*/ next, hideExt, showExt)
	{
		this[this.now].hide(hideExt);
		this.now = next;
		this[this.now = next].show(showExt);
	}
}
