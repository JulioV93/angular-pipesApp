import { Component } from '@angular/core';

@Component({
  selector: 'pages-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {

  public nameLower: string = 'julio';
  public nameUpper: string = 'JULIO';
  public fullName: string = 'juLiO césAr';

  public customDate: Date = new Date(); // 2021-09-01
}
