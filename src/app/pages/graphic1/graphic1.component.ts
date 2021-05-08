import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [],
})
export class Graphic1Component {
  public labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public doughnutChartData1 = [[10, 15, 50]];
}
