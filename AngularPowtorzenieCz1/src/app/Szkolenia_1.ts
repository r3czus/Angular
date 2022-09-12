import { Osoba } from "./Osoba";
import { Szkolenie } from "./szkolenie";
export
class Szkolenia{
    
public static Kursy:Szkolenie[]=[ 
    new Szkolenie ("Programowanie w js","kursy dla początkoujących", new Osoba("Jan","Rzepa")),
    new Szkolenie ("algorytm i stuktura danych", "kurs dla początkujących", new Osoba("Julia","Koks"))
   ]
}