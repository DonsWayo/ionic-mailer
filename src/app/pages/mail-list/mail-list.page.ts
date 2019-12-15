import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.page.html',
  styleUrls: ['./mail-list.page.scss'],
})
export class MailListPage implements OnInit {

  emails: any[];
  loading = true;

  constructor(
    private readonly apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getInboxMails();
  }

  initConnections() {
    this.apiService.getInbox()
    .toPromise()
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  getInboxMails() {
    this.apiService.getInbox()
    .subscribe((data) => {
      console.log(data)
      this.emails = data;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
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

}
