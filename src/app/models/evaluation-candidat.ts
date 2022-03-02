import { JobOwner } from "./jobOwner";
import { Freelancer } from "./freelancer";

export class EvaluationCandidat {
    idEvaluationCandidat!:number;
    score!:number;
    bilan!:boolean;
    commentaire!:string;
    freelancer!:Freelancer;
    jobOwner!:JobOwner;
    
}
