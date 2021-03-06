import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import parse from 'emailjs-mime-parser'
import { TextDecoder } from 'text-encoding'
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.page.html',
  styleUrls: ['./mail-detail.page.scss'],
})
export class MailDetailPage implements OnInit {

  mailParams: any;
  mailBody: any;
  mailBodyContent: any;
  loading: boolean;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private apiService: ApiService
    ) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.mail) {
        this.mailParams = JSON.parse(params.mail);
        this.parseMail()
        this.markAsRead()
      }
    });
  }

  ngOnInit() {
  }

  parseMail() {
    this.mailBody = parse(this.mailParams['body[]'])
    const dec = new TextDecoder('utf-8').decode( this.mailBody.childNodes[1].content)
    this.mailBodyContent = dec;
    console.log(this.mailBodyContent)
    console.log(this.mailBody)

  }

  markAsRead() {
    this.apiService.post('imap-client/' + this.mailParams.uid,{})
    .toPromise()
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

}
