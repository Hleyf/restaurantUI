import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './screen-elements/header/header.component';
import { ContentComponent } from './screen-elements/content/content.component';
import { FooterComponent } from './screen-elements/footer/footer.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ParalaxSectionComponent } from './common/paralax-section/paralax-section.component';
import { BookingModalComponent } from './common/booking-modal/booking-modal.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FeedCardComponent } from './common/feed-card/feed-card.component';
import { AppRoutingModule } from './app-routing.module';



registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ParalaxSectionComponent,
    BookingModalComponent,
    FeedCardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzCardModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzModalModule,
    NzInputNumberModule,
    NzIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
