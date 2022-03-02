
import { Freelancer } from "./freelancer";
import { Entreprise } from "./entreprise";

export class EvaluationEntreprise {

    idCandidature !: number;
    score !: number;
    commentaire !:String;
    entreprise !:Entreprise;
    freelancer !: Freelancer;


}
