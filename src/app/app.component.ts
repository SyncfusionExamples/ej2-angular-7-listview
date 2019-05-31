import { Component } from '@angular/core';
import { FieldSettingsModel } from '@syncfusion/ej2-angular-lists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource = [
    { id: '1', text: 'Apple', category: "Electronics" },
    { id: '2', text: 'Samsung', category: "Electronics" },
    { id: '3', text: 'Microsoft', category: "Cloud" },
    { id: '4', text: 'Amazon', category: "Cloud" },
    { id: '5', text: 'Tesla', category: "Automotive" },
    { id: '7', text: 'Rivian', category: "Automotive" },
    { id: '8', text: 'Google', category: "Web" },
    { id: '9', text: 'Twitter', category: "Web" },
  ];

  fields: FieldSettingsModel = { groupBy: 'category' };
}
