import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  appstatus: Boolean = true;
  applist: any[] = [
    {
      "Id": 1,
      "Name": 'Sharath'
    },
    {
      "Id": 2,
      "Name": 'Kumar'
    }
  ];
}
