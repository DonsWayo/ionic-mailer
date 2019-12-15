import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailDetailPageRoutingModule } from './mail-detail-routing.module';

import { MailDetailPage } from './mail-detail.page';
import { EscapeHtmlPipe } from 'src/app/pipes/keep-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailDetailPageRoutingModule
  ],
  declarations: [MailDetailPage, EscapeHtmlPipe]
})
export class MailDetailPageModule {}
