import { Entreprise } from "./entreprise";
import { EvaluationCandidat } from "./evaluation-candidat";
import { Projet } from "./projet";
import { Utilisateur } from "./utilisateur";

export class JobOwner extends Utilisateur
{
    departement!: String;
    metier!: String;
    entreprise!: Entreprise;
    liste_projet!: Projet[];
    liste_evaluation!: EvaluationCandidat[];
}