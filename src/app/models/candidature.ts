
import { Freelancer } from "./freelancer";
import { Projet } from "./projet";

export class Candidature {

    idCandidature : number;
    date: Date;
    lettreMotivation:string;
    freelancer !: Freelancer;
    projet !: Projet;

}
