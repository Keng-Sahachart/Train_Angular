# บันทึก การ ทำ WorkShop

npm install -g @angular/cli \
จะได้ version ล่าสุด หรือ เลือก version เอาเอง (ยังไมได้ลอง) \
npm install @angular/cli@<specify_angular-cli_version_here> \
https://www.npmjs.com/package/@angular/cli?activeTab=versions \
╔════════════════════════════╦════════════════════════════╗    <br/>
║                            ║                            ║    <br/>
║ Angular-CLI version        ║ Angular version            ║    <br/>
║                            ║                            ║    <br/>
╠════════════════════════════╬════════════════════════════╣    <br/>
║ @angular/cli@8.3.29        ║ Angular 8.3.29             ║    <br/>
╠════════════════════════════╬════════════════════════════╣    <br/>
║ @angular/cli@9.1.3         ║ Angular 9.1.3              ║    <br/>
╠════════════════════════════╬════════════════════════════╣    <br/>
║ @angular/cli@10.2.1        ║ Angular 10.2.1             ║    <br/>
╚════════════════════════════╩════════════════════════════╝    <br/>
\
ng new my-app \
cd my-app \
ng serve --open \




#ปัญหาที่พบระว่าง เรียน
- ตอนทำ workshop ตอนนี้ เป็น angular 11.0.7 หลังจากสร้าง project แล้ว run server ไม่ได้ ต้องไป ปิด Ivy ก่อน ถึงจะ run ได้ โดย ไปที่ tsconfig.app.json แล้วเพิ่มดังนี้ ใน {}
 		,"angularCompilerOptions": {
			"enableIvy": false
		}
	คือ Ivy เป็นชื่อเรียก Render Engine (Gen 3) ช่วยให้ (Smaller Faster Simpler)  แต่ตอนนี้ คงงดใช้ไปก่อน เพราะ มันไม่ compatible กับ project ที่เพิ่งสร้างใหม่ตอนนี้

- ลง bootstrap แล้วไม่มี intelisense แสดงออกมา เมื่อพิมพ์  หา extension ลงไปหลายตัว ก็ไม่ออก แต่พอ uninstall ,disable หมด ก็หาย
- สร้างตัวแปร ใน .ts แล้ว ไม่เกิด intellisense ที่หน้าอ template .html เมื่อจะพิมพ์เรียกใช้งาน  --> ให้ลง extension tabnine และ  Angular Language Service
- ตอนสร้าง project จะมี ถามว่าจะเปิด strict option ไหม เป็น tool เอาไว้ช่วย หาบัคตอน compile typeScript ให้ดียิ่งขึ้น ลดขนาดแอพ มีตั้งแต่ Angular 10 

## ep 5
แนะนำ extension Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets
เป็น snippet สร้าง component ใน bootstrap มาทั้ง component

## ep 6. Asset
รูปไฟล์ต่างๆ เอาไว้ใน โฟลเดอร์ Asset

## ep 7. router link 
ที่  app.module.ts
 - import Module routerModule มาก่อน เพื่อใช้ งาน
 - ใน imports : [] เพิ่ม 
	,RouterModule.fromRoot([
		{Path:'RouterName' ,component:RouterNameComponent},
	])
 - tag a ถ้าใช้ href จะ refresh หน้าทุกครั้ง แต่ถ้าใช้ routerLink จะ เปลี่ยน เฉพาะส่วน

## ep 8. binding
{{ expression }}	=> interpolation / วางตัวแปรเพื่อ แสดงผล คำนวน   <br>
[property]="expression"	=> one way binging / กำหนดค่าให้ component <br>
(event)="statement"	=> event binding / กำหนด ฟังก์ชั้น ให้ event <br>
[(ngModel)]="property"	=> two way binding / ผูกค่าให้ วัตถุต่างๆ เช่น อินพุต <br>

## ep 9.
 {{ variable }}ที่หน้า .html คือการ ปรินท์ตัวแปร ออกมา ใน html
 
## ep 10.
ใน .ts สร้าง object และมี property name:"value"
ใน .html ปรินท์ {{ object.proertyName }} 

## ep 11. two way binding
 คือการประกาศ ตัวแปร ใน .ts แล้ว แสดงผลใน template .html และยังสามารถ แก้ไขตัวแปรผ่านหน้า .html ได้
 1. ที่ไฟล์ app.module.ts
	- import { FormsModule } from '@angular/forms';
	- imports: [ FormsModule ]
 2. ประกาศตัวแปรที่ .ts 
	- sName: string = "กรอกอะไรก็ได้ แล้ว ตัวแปรจะเปลี่ยนตาม แล้วแสดงผลที่ preview";.
 3. แสดงผล และฟอร์มแก้ไข ที่ .html 
	- ใน <form> ใส่ <input type="text" name="fullName" [(ngModel)]="sName" class="form-control" placeholder="จะใช้ไม่ได้เพราะผูกไว้กับตัวแปร ยกเว้นตัวแปรยังไม่มีค่า"/>
	- แสดงผลที่ ทำการแก้ไข Name=> {{sName}}<br>
	
## ep 12. event binding
 คือ การ ผูก event ในแท็ก ในไฟล์ .html กับ ฟังชั่น	ใน .ts
 event ของ tag จำพวก ฟอร์ม เช่น ปุ่ม, input โดยใช้ (event)="myFumc()"
 แล้วค่อยไปสร้าง ฟังชั่น ใน .ts ในส่วน ฟังก์ชั้น export 
	- export class ContactComponent implements OnInit { myFumc(){} }
 
## ep 13. create project with material design
 เป็น ประมาณว่า library css ของ angular ที่มีไว้ให้ใช้<br>
	- ng new miniStockAngular<br>
	- ng add @angular/materal   // ได้มา 30 กว่า เมก<br>
		- Would you like to share anonymous usage data ...? yes<br>
		- color Purple/Green<br>
		- Set up global Angular Material typography styles? Yes<br>
		- Set up browser animations for Angular Material? Yes<br>
 
## ep 14. material button
	https://material.angular.io/components/categories
 คือการ กำหนด attribute ให้ component ใน html
	- import ใน app.module.ts ก่อน 
		- import {MatButtonModule} from '@angular/material/button'; 
	- แล้วใน imports: [] 
	- ใส่ attribute ใน tag ได้เลย
		- <button mat-button>Basic</button>
 
## ep 15. create login page part 1
	- ng g c LoginRegister // L ตัวใหญ๋ / สังเกตุว่า จะได้ โฟลเดอร์ login-register มี "-" ด้วย
 ในไฟล์ app.module.ts ใส่ แล้ว Import ตามนี้ ให้เรียบร้อย 
	- import { MatButtonModule } from '@angular/material/button';// theme button
	- import { MatCardModule } from '@angular/material/card';
	- import { MatTabsModule } from '@angular/material/tabs';
	- import { MatFormFieldModule } from '@angular/material/form-field';
	- import { MatInputModule } from '@angular/material/input';
	- import { MatCheckboxModule } from '@angular/material/checkbox';
	- import { MatIconModule } from '@angular/material/icon';
 
## ep 16. login design
	- import { FormsModule } from '@angular/forms';
	- เปลี่ยน theme css ในไฟล์ angular.json เป็น indigo-pink.css 
            "styles": [
              "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
              "src/styles.scss"
            ],
	- พิมพ์ ใน login-register.component.html ใช้ material เป็นเหมือน tag ปกติ ที่หน้า ฟอร์ม เช่น 
		<mat-form-field>
            <mat-label>Username/Email</mat-label>
            <input matInput name="username" ngModel #username />
            <mat-icon matSuffix>email</mat-icon>
        </mat-form-field>
		
	- ใส่ scss ใน login-register.component.scss เหมือน css ปกติเลย
		แต่มีที่ css ที่เป็น tag ของ material => app-login-register {}
 
 
 
 
 
 
 
 
 
 
 
 
