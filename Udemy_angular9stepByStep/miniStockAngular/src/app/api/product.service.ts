import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'  // ใช้เชื่อมต่อ กับ service ที่เป็น protocal http
import { Observable } from 'rxjs';  // โหลดเพจรอ ล่วงหน้า ไม่ให้กระตุก ลื่นไหล เหมือน facebook
import { ProductModel } from './ProductModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "http://localhost/api";

  constructor(private http: HttpClient) { }

  /** กำหนด ว่าจะใช้ รูปแบบ json */
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  getProduct(): Observable<ProductModel> {
    /** get url เพื่อรับ ข้อมูล json */
    return this.http.get<ProductModel>(this.apiUrl + '/product.php');
  }
}
