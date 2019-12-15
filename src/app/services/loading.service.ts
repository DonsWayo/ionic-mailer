import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: HTMLIonLoadingElement;

  constructor(public loadingController: LoadingController) { }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true
    });
    return await this.loading.present();
  }

  dismissLoading() {
    this.loading.onDidDismiss();
  }
}
