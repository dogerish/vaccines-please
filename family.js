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
		this.player = new FamilyMember("player");
		this.wife = new FamilyMember("wife");
		this.son = new FamilyMember("son");
		this.daughter = new FamilyMember("daughter");
		this.dog = new FamilyMember("dog");
		this.nonPlayerList = [this.wife, this.son, this.daughter, this.dog];
		this.memberList = [this.player, ...this.nonPlayerList];
		this.onsicken = onsicken;
	}

	forEach(/*function*/ f) { this.memberList.forEach(f); }

	evalResult(date, result){
		let list = result.multiple || [result];
		for (let r of list)
		{
			switch(r.how){
			case "sicken":
				if (
					this[r.who].sicken(date, r.what, r.length, r.lethality)
					&& this.onsicken
				)
					this.onsicken(this[r.who]);
				break;
			case "kill":
				this[r.who].kill();
				break;
			case "nothing":
			case undefined:
				break;
			default:
				console.error(`Unknown effect for result '${r.how}'`);
				break;
			}
		}
	}

	update(date){
		this.forEach(member => member.update(date));
	}
}
