import { Component, ChangeDetectionStrategy, OnInit, OnChanges, Input, ChangeDetectorRef } from '@angular/core';
import { Data } from '../data';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit, OnChanges {
  @Input() data: Data[];
  constructor(private changeDetection: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    console.log('onIt');
    setTimeout(() => {
      this.data.push(new Data (100,'heikal'));
      console.log("/// timeout executed");
     // this.changeDetection.detectChanges();
    }, 5000);
  }
  ngOnChanges(): void {
    console.log(this.data);
  }
  dataByName(index, data) {
    return data.id;
  }
}
