import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [],
})
export class DoughnutComponent {
  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  @Input('data') doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public colors: Color[] = [
    {
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
    },
  ];
  @Input() title: string = 'Sin título';
}
