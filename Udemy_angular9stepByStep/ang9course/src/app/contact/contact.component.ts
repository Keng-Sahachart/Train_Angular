import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  /*********** 
   * ตัวแปรทดสอบ ทำ two way binding
   */
  sName: string = "กรอกอะไรก็ได้ แล้ว ตัวแปรจะเปลี่ยนตาม แล้วแสดงผลที่ preview";
  sMessage: string = "Message ประกาศใน .ts";
  nPiority: number =54321.12345;

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(){
    console.log(`sName is length -->${this.sName.length} `);
    
  }

  myBtnOnPress(){
    console.log("from Event pass from html page.")
  }
}
