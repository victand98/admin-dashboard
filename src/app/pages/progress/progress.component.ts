import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.html'],
})
export class ProgressComponent {
  progress: number = 40;

  get getPercetage() {
    return `${this.progress}%`;
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      return (this.progress = 100);
    }

    if (this.progress <= 0 && value <= 0) {
      return (this.progress = 0);
    }

    return (this.progress = this.progress + value);
  }
}
