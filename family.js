const HEALTHY = "healthy";
const SICK = "sick";
const DEAD = "dead";

class Sickness
{
	constructor(date, name, weeks, lethality)
	{
		this.name = name;
		this.endsOn = new Date(date.valueOf());
		this.endsOn.setDate(this.endsOn.getDate() + weeks * 7);
		this.lethality = lethality;
	}

	// calculates how dangerous this sickness is based on the proportion of lethality to remaining
	// duration. higher result = higher danger
	calcDanger(date) { return this.lethality / (this.endsOn - date); }
}

class FamilyMember{
	constructor(name){
		this.name = name;
		this.status = HEALTHY;
		this.sickness = null;
	}

	update(date){
		if (this.status == SICK && date >= this.sickness.endsOn) {
			this.status = (Math.random() < this.sickness.lethality) ? DEAD : HEALTHY;
			this.sickness = null;
		}
	}

	applySickness(sickness)
	{
		this.status = SICK;
		this.sickness = sickness;
	}
	// returns true if sickness was applied
	sicken(...sicknessArgs){
		let s = new Sickness(...sicknessArgs);
		// if not already sick or if sickness is more dangerous, use it
		if (this.status != SICK || this.sickness.calcDanger() < s.calcDanger())
		{
			this.applySickness(s);
			return true;
		}
		return false;
	}

	kill(){
		this.status = DEAD;
	}

	statusString(){
		let s = this.status;
		if (this.status == SICK)
			s += substituteKeys(" with {sickness} ({lethality}% lethal) until {date}", {
				sickness: this.sickness.name,
				lethality: this.sickness.lethality * 100,
				date: this.sickness.endsOn.toLocaleDateString()
			});
		return s;
	}
}

class Family{
	constructor(onsicken){
		this.father = new FamilyMember("father");
		this.wife = new FamilyMember("wife");
		this.son = new FamilyMember("son");
		this.daughter = new FamilyMember("daughter");
		this.onsicken = onsicken;
	}

	forEach(/*function*/ f)
	{
		f(this.father);
		f(this.wife);
		f(this.son);
		f(this.daughter);
	}

	evalResult(date, result){
		switch(result.how){
		case "sicken":
			if (
				this[result.who].sicken(date, result.what, result.length, result.lethality)
				&& this.onsicken
			)
				this.onsicken(this[result.who]);
			break;
		case "kill":
			this[result.who].kill();
			break;
		case "nothing":
			break;
		default:
			console.error(`Unknown effect for result '${result.how}'`);
			break;
		}
	}

	update(date){
		this.forEach(member => member.update(date));
	}
}
