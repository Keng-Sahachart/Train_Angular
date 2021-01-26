import { Component, OnInit ,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation : ViewEncapsulation.None,  // None คือ จะไม่มีการ Encapsulation ต้องการ เปลี่ยนแปลง css ของ ตัวแม่ด้วย
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
