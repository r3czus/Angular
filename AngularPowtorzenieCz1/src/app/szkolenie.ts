import { Osoba } from "./Osoba";

export class Szkolenie{
    private tytul:String;
    private tresc:String;
    private prowadzoncy:Osoba ;

    constructor (tytul:string,tresc:string,prowadzoncy:Osoba){
        this.tytul=tytul;
        this.prowadzoncy=prowadzoncy;
        this.tresc=tresc;
    }
    getTytul(){
        return this.tytul;
    }
    getTresc(){
        return this.tresc;
    }
    getProwadzoncy()
    {
        return this.prowadzoncy;
    }
    
    setTytul(tytul:string){
        this.tytul=tytul;
    }

    setTresc(tresc:string){
        this.tresc=tresc;
    };

    setOsoba(osoba:Osoba){
        this.prowadzoncy=osoba;
    }
}