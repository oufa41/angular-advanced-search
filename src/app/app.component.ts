import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Data } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-advanced-search';
  data: Data[] = [];
  count = 0;
  constructor(private changeDetection: ChangeDetectorRef) {
    this.fillInitialArray();
  }
  ngOnInit(): void {
    // this.data.push(new Data(this.count++, 'ahmed'));
    // this.data.push(new Data(this.count++, 'ahmed'));
    // this.data.push(new Data(this.count++, 'ahmed'));
    // this.data.push(new Data(this.count++, 'ahmed'));
    // this.data.push(new Data(this.count++, 'ahmed'));
    
  }
  changeFromParent(): void {
    const newData: Data[] = [];
    for (const data of this.data) {
      newData.push(new Data(data.id, data.name));
    }
    const messageContent: string = Math.random().toString(36).substring(7);
    const messageId: number = Math.random();
    newData.push(new Data(messageId, messageContent));
    this.data = [];
    this.data = newData;
    // this.data.push(new Data(this.count++, 'ahmed'));
    // this.data = this.data.slice();
    console.log(this.data);
    // setTimeout(() => {
    //   this.data.push(new Data (200,'Ahmed'));
    //   console.log("/// timeout executed");
    //  // this.changeDetection.detectChanges();
    // }, 5000);
  }

  private fillInitialArray() {
    this.data.push(new Data(0, 'Hi'));
    this.data.push(new Data(1, 'Hi !!!'));
    this.data.push(new Data(2, 'Any plans today ?'));
    this.data.push(new Data(3, 'Noop'));
    this.data.push(new Data(4, 'Just optimizing some arrays :P'));
  }
}
