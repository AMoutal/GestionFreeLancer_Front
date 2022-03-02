import { EvaluationEntreprise } from "./evaluation-entreprise";
import { JobOwner } from "./job-owner";

export class Entreprise 
{
    idEntreprise!: number;
    nom!: String;
    adresse!: Adresse;
    liste_jobowner!: JobOwner[];
    liste_evaluation!: EvaluationEntreprise[];
}
