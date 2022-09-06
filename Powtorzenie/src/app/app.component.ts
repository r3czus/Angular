import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Powtorzenie';
  kursyProgramowanie = ["Js", 'Python', "PHP", "Node.js"];
  urlzdj1: string = "assets/Images/zdj2.png";
  urlzdj2: string = "assets/Images/zdj4.jpg";
  urlzdj3: string = "assets/Images/zdj5.jpg";
  aktywne: boolean = true;
  licznik: number = 1;
  brak: string = "assets/Images/noPicture.jpg";
  wybrany: number = 0;
  kolory: string[] = ["red", "blue", "green", "purple"]


  zwieksz(): void {
    this.licznik++;
  }
  Zobacz(): void {
    this.aktywne = !this.aktywne
  }
  Formatuj(): void {
    this.wybrany++;
    if (this.wybrany > this.kolory.length - 1) {
      this.wybrany = 0;
    }
  }
}
