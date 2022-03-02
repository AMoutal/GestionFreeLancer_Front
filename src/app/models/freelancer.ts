import { EvaluationCandidat } from "./evaluation-candidat";
import { EvaluationEntreprise } from "./evaluation-entreprise";
import { Projet } from "./projet";
import { Resultat } from "./resultat";
import { Utilisateur } from "./utilisateur";

export class Freelancer extends Utilisateur{
    metier!:string;
    disponible!:boolean;
    cv!:any;
    resultats!:Resultat[];
    evaluationCandidats!:EvaluationCandidat[];
    evaluationEntreprises!:EvaluationEntreprise[];
    projet!:Projet;
}
