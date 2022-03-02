import { Freelancer } from "./freelancer";
import { JobOwner } from "./job-owner";

export class EvaluationCandidat {
    idEvaluationCandidat!:number;
    score!:number;
    bilan!:boolean;
    commentaire!:string;
    freelancer!:Freelancer;
    jobOwner!:JobOwner;
    
}
