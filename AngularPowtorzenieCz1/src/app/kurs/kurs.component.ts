import { Component, OnInit,Input } from '@angular/core';
import { __importDefault } from 'tslib';
import { Osoba } from '../Osoba';
import { Szkolenie } from '../szkolenie';
import { Szkolenia } from '../Szkolenia_1';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.css']
})
export class KursComponent implements OnInit {
  @Input() aktualny!:number;
   Kursy:Szkolenie[]=Szkolenia.Kursy;
   
  @Input()zmiennaImport!:string;//tak wygląda zmiena która jest imporotwana pamiętaj o wykrzykniku 
 // żeby można było inportować zmiene trzeba Dodać Input w inportach to na samej górze
  constructor() { }

  ngOnInit(): void {
  }

}
