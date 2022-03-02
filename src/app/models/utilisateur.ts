import { Role } from "./role";

export class Utilisateur {
    idUser!:number;
    nomUser!:string;
    prenomUser!:string;
    emailUser!:string;
    username!:string;
    password!:string;
    roles!:Role[];
}
