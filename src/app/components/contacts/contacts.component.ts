import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/apps.constants';
import Swal from 'sweetalert2'
declare var emailjs: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  name: string = "Lok Priya Sagar";
  address: string = "Gurugram, India";
  emailId:string = "sagarlks311@gmail.com";
  mobileNo: string = "+91 7021543276";

  sitesMap: any = AppConstants.SOCIAL_SITES;

  visitorName: string = '';
  visitorEmail: string = '';
  subject: string = '';
  message: string = '';

  constructor() { }

  ngOnInit(): void {
    emailjs.init(AppConstants.EMAILJS.PUBLIC_KEY);
  }

  redirectTo(socialObj: any){
    window.open(socialObj.LINK, 'blank')?.focus();
  }

  sendEmail(){
    if(!this.visitorName?.trim() || !this.visitorEmail?.trim() || !this.subject?.trim() || !this.message?.trim()){
      Swal.fire('Please fill all the details.');
      return;
    }

    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegex.test(this.visitorEmail)){
      Swal.fire('Enter a valid email Id.');
      return;
    }
    emailjs.send(AppConstants.EMAILJS.SERVICE_ID, AppConstants.EMAILJS.TEMPLATE_ID,{
      from_subject: this.subject,
      to_name: this.name,
      from_name: this.visitorName,
      message: this.message,
      reply_to: this.visitorEmail,
    }).then((res: any)=>{
      console.log(res);
      this.resetFields();
      Swal.fire({
        icon: 'success',
        title: 'Your message has been sent.',
      })
    }, (error: any)=>{
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong, try again later.',
        })
    });
  }

  resetFields(){
    this.visitorName = '';
    this.visitorEmail = '';
    this.subject = '';
    this.message = '';
  }

}
