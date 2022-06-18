import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aplicarSonido(numero: number): void {
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + numero + '.wav';
    audio.load();
    audio.play();
  }
}
