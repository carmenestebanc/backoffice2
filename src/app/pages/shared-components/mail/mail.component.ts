import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Mail, MailService }  from './mail.service';
import { AppState } from "../../../app.state";

@Component({
  selector: 'ubl-mail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
  providers: [ MailService ] 
})
export class MailComponent { 
    public mails: Observable<Mail[]>;
    id: number;
    type: string; 
    private markAsRead: boolean = false;
    private markAsUnRead: boolean = false;
    private deleteChecked: boolean = false;

    constructor(private service: MailService,
                private route: ActivatedRoute,
                public router: Router,
                private state:AppState){
                     
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.id = this.route.snapshot.firstChild.params['id'];             
                this.type = this.route.snapshot.firstChild.params['type'];
                setTimeout(() =>{
                    jQuery('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
                });
            }           
        });   
      
    } 


    public getBack() {
        if(this.type)
            this.router.navigate(['pages/mail/mail-list/'+ this.type]);
        else
            this.router.navigate(['pages/mail/mail-list/inbox']);
    }

    public trash() {
        jQuery('[data-toggle="tooltip"]').tooltip('hide');
        this.service.getMail(this.id).then((mail) => {
            mail.trash = true;
            mail.sent = false;
            mail.draft = false;
            mail.starred = false; 
        });        
        this.router.navigate(['pages/mail/mail-list/inbox']);
    }

    public setAsRead(){
        this.markAsRead = !this.markAsRead;
        this.state.notifyDataChanged('markAsRead', this.markAsRead); 
    }

    public setAsUnRead(){
        this.markAsUnRead = !this.markAsUnRead;
        this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead); 
    }

    public deleteCheckedMail(){
        this.deleteChecked = !this.deleteChecked;
        this.state.notifyDataChanged('deleteChecked', this.deleteChecked); 
    }


   
}
