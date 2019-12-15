import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  provider: 'gmail' | 'none';

  constructor(
    private readonly menuCtrl: MenuController,
    private readonly alertController: AlertController
    ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Important!',
      message: 'For now, need to enable less secure apps in your google account!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  providerSelected(value: any) {
    this.provider = value
    console.log(this.provider)
  }

}
