import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

let name = 'alty';
if (name === 'alty'){
  console.log('name is Alty'); 
} else {
  console.log('ERROR');
}
  


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 

  
  
    
    }



