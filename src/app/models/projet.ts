import { JobOwner } from "./job-owner";
import { Freelancer } from "./freelancer";
import { Candidature } from "./candidature";

export class Projet
{
    idUtilisateur!:number;
    nom!:string;
    remuneration!:number;
    description!:string;
    dateDebut!:Date;
    dateFin!:Date;
    etat!:boolean;
    liste_freelancer!:Freelancer[];
    liste_candidature!:Candidature[];
    jobOwner!:JobOwner;

}
