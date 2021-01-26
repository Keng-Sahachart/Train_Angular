import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../api/product.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,  // None คือ จะไม่มีการ Encapsulation ต้องการ เปลี่ยนแปลง css ของ ตัวแม่ด้วย
})
export class DashboardComponent implements OnInit {

  products = {};  // ตัวแปรว่างๆ ไว้รับค่า จาก api

  constructor(public ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getProduct().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    })
  }


}
