export class Prosperity {
    mentalHealth: number;
    physicalHealth: number;
    meaning: number;
    love: number;
    relationships: number;
    job: number;
    income: number;



    constructor(data: any = {}){
        this.mentalHealth = data.mentalHealth || 0;
        this.physicalHealth = data.physicalHealth || 0;
        this.meaning = data.meaning || 0;
        this.love = data.love || 0;
        this.relationships = data.relationships || 0;
        this.job = data.job || 0;
        this.income = data.income || 0;
    }
}