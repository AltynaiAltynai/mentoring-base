import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

let name = 'alty';
if (name === 'alty'){
  console.log('name is Alty'); 
} else {
  console.log('ERROR');
}
  
const func = (data: string) => {return data};
const itemName: string = 'О компании';
const companyfunc = func(itemName);

const newPages = [5, 4, ,3, 2, 1];

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];
const upperCaseMenuItem = menuItems.map((item) => item.toUpperCase())

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';
  isShowCatalog = true;
 

  readonly aboutCompany = companyfunc;
  isShowMan = true;

  readonly newPages = newPages;

  menuItems = upperCaseMenuItem;    
  isUpperCase = true;
  changeMenuText()  {
    this.menuItems = upperCaseMenuItem.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }


}

