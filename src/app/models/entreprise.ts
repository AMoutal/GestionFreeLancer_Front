import { Adresse } from "./adresse";
import { EvaluationEntreprise } from "./evaluation-entreprise";
import { JobOwner } from "./job-owner";

export class Entreprise 
{
    idEntreprise!: number;
    nom!: String;
    adresse: Adresse = new Adresse();
    email!: string;
    liste_jobowner!: JobOwner[];
    liste_evaluation!: EvaluationEntreprise[];
}
