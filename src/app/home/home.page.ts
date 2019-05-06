import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { BusService } from '../bus.service';
import * as moment from 'moment';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;
  datattdem: any;
  datatsdem: any;
  datattdiv: any;
  datatsdiv: any;
  datattdem2: any;
  datatsdem2: any;
  datattdiv2: any;
  datatsdiv2: any;

  constructor(private busService: BusService) { }

  ttdem = this.busService.getData('ttdem').subscribe((data: []) => {
    console.log(data);
    this.datattdem = data["bustime-response"]['prd'][0]['prdtm'].substring(9);
    this.datattdem2 = data["bustime-response"]['prd'][1]['prdtm'].substring(9);
  });
  tsdem = this.busService.getData('tsdem').subscribe((data: []) => {
    console.log(data);
    this.datatsdem = data["bustime-response"]['prd'][0]['prdtm'].substring(9);
    this.datatsdem2 = data["bustime-response"]['prd'][1]['prdtm'].substring(9);
  });
  ttdiv = this.busService.getData('ttdiv').subscribe((data: []) => {
    console.log(data);
    this.datattdiv = data["bustime-response"]['prd'][0]['prdtm'].substring(9);
    this.datattdiv2 = data["bustime-response"]['prd'][1]['prdtm'].substring(9);
  });
  tsdiv = this.busService.getData('tsdiv').subscribe((data: []) => {
    console.log(data);
    this.datatsdiv = data["bustime-response"]['prd'][0]['prdtm'].substring(9);
    this.datatsdiv2 = data["bustime-response"]['prd'][1]['prdtm'].substring(9);
  });

  doRefresh(event) {
    console.log('Begin async operation');
    window.location.reload();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
convertData(convData) {
    const convDataNum = moment(convData, 'HH:mm');
    let rounded = Math.round(convDataNum.diff(moment().utcOffset('-5:00'), 'minutes', true));
    if (rounded < 0) { rounded = 0; }
    return rounded;
  }
ngOnInit() {

  }
}



