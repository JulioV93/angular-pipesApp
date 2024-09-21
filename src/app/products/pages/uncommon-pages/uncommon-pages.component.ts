import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
@Component({
  selector: 'pages-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {
  //i18nSelect
  public name: string = 'Julio';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  chageClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Julio', 'Melissa', 'Ezequiel', 'Carlos', 'Fernando', 'Mariana', 'Lucia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValuePipe
  public person = 
  {
    name: 'Julio',
    age: 30,
    address: 'Calle 123'
  }

  //AsyncPipe
  public myObservableTimer: Observable<number> = interval(2000);
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
    }, 3500);
  });
}
