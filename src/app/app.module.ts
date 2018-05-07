import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Http Service
import { HttpModule, Http } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { MainService } from './service/main.service';

// Add Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { HubComponent } from './hub/hub.component';
import { AddComponent } from './add/add.component';

// Route
const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ContentComponent, data: { menuName: 'รายการครุภัณฑ์' } },
  { path: 'add', component: AddComponent, data: { menuName: 'เพิ่มครุภัณฑ์' } },
  { path: 'hub', component: HubComponent },
  { path: '**', component: PagenotfoundComponent }
];

// Verified JWT
export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    globalHeaders: [{ 'Accept': 'application/json' }],
    tokenGetter: (() => localStorage.getItem('token-jwt'))
  }), http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    PagenotfoundComponent,
    FooterComponent,
    HubComponent,
    AddComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://203.157.182.15/eoffice/api' },
    { provide: 'SIGNIN_URL', useValue: 'http://203.157.182.15/accountsv2' },
    { provide: AuthHttp, useFactory: getAuthHttp, deps: [Http] },
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
