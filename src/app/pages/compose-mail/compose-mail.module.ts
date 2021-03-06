import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComposeMailPageRoutingModule } from './compose-mail-routing.module';

import { ComposeMailPage } from './compose-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComposeMailPageRoutingModule
  ],
  declarations: [ComposeMailPage],
  exports: [ComposeMailPage]
})
export class ComposeMailPageModule {}
