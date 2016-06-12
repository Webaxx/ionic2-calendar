import {Component} from "@angular/core";
import {Toast, NavController} from 'ionic-angular';
import {Calendar} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {

  public title: string;
  public note: string;
  public startDate: Date;
  public endDate: Date;
  public titleUpdated: string;
  public noteUpdated: string;

  private nav: NavController;

  constructor(nav: NavController) {

    this.nav = nav;

    this.title = 'Event 1';
    this.note = 'Creating an event !';
    this.startDate = new Date();
    this.startDate.setMinutes(this.startDate.getMinutes() + 10);
    this.endDate = new Date();
    this.endDate.setHours(this.startDate.getHours() + 1);

    this.titleUpdated = 'Event updated';
    this.noteUpdated = 'We update the event !';
  }

  public createEvent():void{

    let options:any = {
      firstReminderMinutes:5
    };

    Calendar.createEventWithOptions(this.title, null, this.note, this.startDate, this.endDate, options).then(() => {
      this.nav.present(Toast.create({
        message:'Created',
        duration:3000
      }));
    });
  }

  public deleteEvent():void{
    Calendar.deleteEvent(this.title, null, this.note, this.startDate, this.endDate).then(data => {
      this.nav.present(Toast.create({
        message:data===true ? 'Deleted' : 'Not deleted',
        duration:3000
      }));
    });
  }

  public openCalendar():void{
    Calendar.openCalendar(this.startDate);
  }
}
