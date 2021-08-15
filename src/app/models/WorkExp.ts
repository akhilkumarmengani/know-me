class ExpObj{
    company : String;
    period : String;
    contributions : String[];
    constructor(){
        this.company = "";
        this.period = "";
        this.contributions = [];
    }
}

export class WorkExp{
     experiences : ExpObj[];
     constructor(){
         this.experiences = [];
     }
}