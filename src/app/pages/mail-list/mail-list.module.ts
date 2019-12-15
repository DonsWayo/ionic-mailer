import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailListPageRoutingModule } from './mail-list-routing.module';

import { MailListPage } from './mail-list.page';
import { ComposeMailPageModule } from '../compose-mail/compose-mail.module';
import { ComposeMailPage } from '../compose-mail/compose-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailListPageRoutingModule,
    ComposeMailPageModule
  ],
  declarations: [MailListPage],
  entryComponents: [MailListPage]
})
export class MailListPageModule {}
