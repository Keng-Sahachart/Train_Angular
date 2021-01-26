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
ng serve --open 


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
1. {{ expression }}	=> interpolation / วางตัวแปรเพื่อ แสดงผล คำนวน   <br>
2. [property]="expression"	=> one way binging / กำหนดค่าให้ component <br>
3. (event)="statement"	=> event binding / กำหนด ฟังก์ชั้น ให้ event <br>
4. [(ngModel)]="property"	=> two way binding / ผูกค่าให้ วัตถุต่างๆ เช่น อินพุต <br>

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
 เป็น ประมาณว่า ฒี library css ของ angular ที่มีไว้ให้ใช้ เป็น material เป็น Tag เหมือน HTML<br>
	1. ng new miniStockAngular<br>
	2. ng add @angular/materal   // ได้มา 30 กว่า เมก<br>
		2.1. Would you like to share anonymous usage data ...? yes<br>
		2.2. color Purple/Green<br>
		2.3. Set up global Angular Material typography styles? Yes<br>
		2.4. Set up browser animations for Angular Material? Yes<br>
 
## ep 14. material button
	https://material.angular.io/components/categories
 คือการ กำหนด attribute ให้ component ใน html
	- import ใน app.module.ts ก่อน 
			- import {MatButtonModule} from '@angular/material/button'; 
	- แล้วใน imports: [] 
	- ใส่ attribute ใน tag ได้เลย
		- <button mat-button>Basic</button>
 
## ep 15. create login page part 1
	- ng g c LoginRegister // L ตัวใหญ๋ / สังเกตุว่า จะได้ โฟลเดอร์ login-register มี "-" ด้วย \
 ในไฟล์ app.module.ts ใส่ แล้ว Import ตามนี้ ให้เรียบร้อย  \
	- import { MatButtonModule } from '@angular/material/button';// theme button <br>
	- import { MatCardModule } from '@angular/material/card';<br>
	- import { MatTabsModule } from '@angular/material/tabs';<br>
	- import { MatFormFieldModule } from '@angular/material/form-field';<br>
	- import { MatInputModule } from '@angular/material/input';<br>
	- import { MatCheckboxModule } from '@angular/material/checkbox';<br>
	- import { MatIconModule } from '@angular/material/icon';<br>
 
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
 
## ep 17. backgroud color
	- ถ้า จะเปลี่ยน css body backgroud-color จะเปลี่ยนที่ styles.scss ของ project เลย 
	จะเปลี่ยนที่ body xxx.component.scss ของ component ไม่ได้

## ep 18. check login
	- ใช้ตัวแปร เก็บ User เก็บ user password 
	- ผูกตัวแปร User กับ ฟิลด์ ใช้ two way binding
	- สร้าง event click ที่ปุ่ม ล็อกอิน และผูกให้เรียบร้อย 
		แล้ว ตรวจสอบ user password ถูกต้องหรือไม่ถ้าผิด ให้ ใช้ alert แจ้งออกมา
	- ng g c Dashboard
	
## ep 19. login and change page
	จากเดิม ใช้ router ใน app.module.ts นั้น ไม่ใช่วิธีที่ google เตรียมมาให้ใช้ ต้องไปใช้ที่ app-routing.module.ts เค้าเตรียมมาให้ใช้แล้ว (แต่ตอนแรก ไม่ได้ลง mudule router)
	
	- แก้ไขให้ app.component.html ใส่ <router-outlet> เพื่อ ให้ใช้ router แทน
	- ที่ app-routing.module.ts 

	- ที่ dashboard.component.ts กำหนด ViewEncapsulation เป็น none เพื่อจะเปลี่ยน css ของ page ตัวเอง
	- ที่ login-register.component.ts เพิ่ม ตัวแปรเข้ามาจากภายนอก
		public router: Router
		* พบว่า angular ไม่ได้ import  Router มาให้ ต้อง ทำเอง
	- ที่ login-register.component.ts ถ้า user password ถูกต้อง ให้ this.router.navigate(['dashboard'];
	- dashboard.component.scss ลองเปลี่ยน css body backgroud-color เพราะ เปลี่ยน ViewEncapsulation เป็น none แล้ว
 
 ## ep 20. connect with api
	1. ng g s api/product   // เพื่อสร้าง ตัวเชื่อมต่อ api 
	2. newfile ในโฟลเดอร์ api เพื่อ สร้าง model ProductModel.ts
	3. 
 
 
 
 
 
 
