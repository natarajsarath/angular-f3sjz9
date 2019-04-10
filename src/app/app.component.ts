import { Component } from '@angular/core';
import {Student} from './Student';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Student Marks';
  students: Student[];
  constructor(){
    this.students=[
        {"Id": 1,"Name": 'xx',"Marks":90,"Grade":"A"},
        {"Id": 2,"Name": 'yy',"Marks":80,"Grade":"B"},
        {"Id": 3,"Name": 'zz',"Marks":70,"Grade":"C"},
        {"Id": 4,"Name": 'aa',"Marks":60,"Grade":"D"},
        {"Id": 5,"Name": 'bb',"Marks":50,"Grade":"E"},
        {"Id": 6,"Name": 'xxy',"Marks":90,"Grade":"A"},
        {"Id": 7,"Name": 'xxz',"Marks":90,"Grade":"A"},
        {"Id": 8,"Name": 'yya',"Marks":80,"Grade":"B"},
        {"Id": 9,"Name": 'yyb',"Marks":80,"Grade":"B"},
        {"Id": 10,"Name": 'zzc',"Marks":70,"Grade":"C"},
        {"Id": 11,"Name": 'zzd',"Marks":70,"Grade":"C"},
        {"Id": 12,"Name": 'aac',"Marks":60,"Grade":"D"},
      ];
  } 
}
