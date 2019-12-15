import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ComposeMailPage } from '../compose-mail/compose-mail.page';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.page.html',
  styleUrls: ['./mail-list.page.scss'],
})
export class MailListPage implements OnInit {

  emails: any[];
  loading = true;

  //avoid angular issue

  constructor(
    private readonly apiService: ApiService,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ionViewWillEnter() {
    this.getInboxMails();
  }

  ngOnInit() {
  }

  initConnections() {
   
  }

  getInboxMails() {
    this.apiService.get('imap-client').toPromise()
    .then((data) => {
      this.loading = false;
      this.emails = data;
      console.log(data)
    })
    .catch((err) => {
      this.loading = false;
      console.log(err)
    })
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  goToMailDetail(event: any) {
    console.log(event)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        mail: JSON.stringify(event)
      }
    };
    this.router.navigate(['/mail-detail'], navigationExtras)
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ComposeMailPage
    });
    return await modal.present();
  }

  public isIgnoreStatus(item: any): boolean {
    const val = !item.flags.includes('\\Seen')
    return val;
}

}
