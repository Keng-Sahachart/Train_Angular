import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';

import { RouterModule } from '@angular/router'; // import เข้ามา เพื่อ ทำ router link

import { FormsModule } from '@angular/forms';  // เพื่อเอาไปใช้ทำ binding 2 way กับ ฟอร์ม ใน html

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    AboutComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,  // 2 way binding กับ tag ฟอร์ม ใน html
    RouterModule.forRoot([/* กำหนด router กับ page */
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'product', component: ProductComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
