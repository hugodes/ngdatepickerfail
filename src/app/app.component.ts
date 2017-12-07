import {Component, OnInit} from '@angular/core';
import {IMyOptions} from 'mydatepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
  };
  public date: any;

  ngOnInit() {
    const d = new Date();
    this.date = { date: {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() } };
    setInterval(() => {
      console.log(this.date);
    }, 1000);
  }

}
