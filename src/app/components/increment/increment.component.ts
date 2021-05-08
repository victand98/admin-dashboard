import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [],
})
export class IncrementComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  // rename argument in @Input('renameArgument') or @Output('nameArgument)
  @Input() progress: number = 40;
  @Input() btnClass: String = 'btn-info';

  @Output() onChangeProgress: EventEmitter<number> = new EventEmitter();

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.onChangeProgress.emit(100);
      return (this.progress = 100);
    }

    if (this.progress <= 0 && value <= 0) {
      this.onChangeProgress.emit(0);
      return (this.progress = 0);
    }

    this.progress = this.progress + value;
    this.onChangeProgress.emit(this.progress);
    return this.progress;
  }

  onChangeValue(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.onChangeProgress.emit(this.progress);
  }
}
