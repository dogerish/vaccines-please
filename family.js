const HEALTHY = "healthy";
const SICK = "sick";
const DEAD = "dead";

class FamilyMember{
    constructor(name){
        this.name = name;
        this.sicknessName = "";
        this.status = HEALTHY;
        this.sicknessLevel = 0;
    }
    
    update(){
        if(this.status == SICK && this.sicknessLevel){
            this.sicknessLevel--;
            if (this.sicknessLevel == 0){
                this.status = DEAD;
            }
        }
    }

    sicken(name, turns){
        //if the current sickness will kill the person faster dont apply new sickness
        if(this.status == SICK && this.sicknessLevel < turns || this.status == DEAD) return;
        this.status = SICK;
        this.sicknessName = name;
        this.sicknessLevel = turns;
    }

    kill(){
        this.status = DEAD;
    }

    statusString(){
        return this.status + ((this.status == SICK) ? ` with ${this.sicknessName} for ${this.sicknessLevel} turns` : "");
    }
}

class Family{
    constructor(){
        this.father = new FamilyMember("father");
        this.wife = new FamilyMember("wife");
        this.son = new FamilyMember("son");
        this.daughter = new FamilyMember("daughter");
    }

    evalResult(result){
        switch(result.how){
            case "sicken":
                this[result.who].sicken(result.what, result.length)
                break;
            case "kill":
                this[result.who].kill();
                break;
        }
    }

    update(){
        this.father.update();
        this.wife.update();
        this.son.update();
        this.daughter.update();
    }
}