import { Component, OnInit,Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.css']
})
export class KursComponent implements OnInit {

  @Input()zmiennaImport!:string;//tak wygląda zmiena która jest imporotwana pamiętaj o wykrzykniku 
 // żeby można było inportować zmiene trzeba Dodać Input w inportach to na samej górze
  constructor() { }

  ngOnInit(): void {
  }

}
