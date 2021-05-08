import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { IncrementComponent } from './increment/increment.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

@NgModule({
  declarations: [IncrementComponent, DoughnutComponent],
  exports: [IncrementComponent, DoughnutComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
})
export class ComponentsModule {}
