import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

const func = (data: string) => {return data};
const itemName: string = 'О компании';
const companyfunc = func(itemName);

const newPages = [5, 4, 3, 2, 1];

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];
const upperCaseMenuItem = menuItems.map((item) => item.toUpperCase())

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true,
    imports: [NgFor, NgIf, RouterLink]
})


export class HeaderComponent {
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
