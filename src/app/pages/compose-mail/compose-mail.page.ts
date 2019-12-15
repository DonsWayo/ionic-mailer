import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Mail } from 'src/app/models/mail.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.page.html',
  styleUrls: ['./compose-mail.page.scss'],
})
export class ComposeMailPage implements OnInit {

  mailForm: FormGroup

  constructor(
    private readonly modalCtrl: ModalController,
    private fb: FormBuilder,
    private readonly apiService: ApiService,
    private readonly loadingService: LoadingService,
    private readonly toastController: ToastController) {
    this.createForm()
  }

  createForm() {
    this.mailForm = this.fb.group({
      to: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      text: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }


  postMail() {
   // this.loadingService.presentLoading()
    const mail: Mail = {
      smtp: "smtp.gmail.com",
      user: "mail", 
      pass: "pass",
      tls: false,
      requireTLS: false,
      port: 465,
      secure: true,
      to: this.mailForm.value.to,
      subject: this.mailForm.value.subject,
      text: this.mailForm.value.text
    }

    this.apiService.post('mailer', {mail})
    .toPromise()
    .then((data) => {
      //this.loadingService.dismissLoading()
      this.presentToast()
      this.dismiss()
      console.log(data)
    })
    .catch((err) => {
      //this.loadingService.dismissLoading()
      console.log(err)
    })
  }

  onClickSubmit() {
    console.log(this.mailForm.valid)
    this.postMail()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Mail Sent',
      duration: 3000
    });
    toast.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
