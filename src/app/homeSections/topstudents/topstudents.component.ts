import { Component, OnInit, Input } from '@angular/core';

export interface IAlert {
    id: number;
    type: string;
    strong?: string;
    message: string;
    icon?: string;
}

@Component({
  selector: 'app-top-students',
  templateUrl: './topstudents.component.html',
  styleUrls: ['./topstudents.component.css']
})
export class TopStudentsComponent {
  @Input()
  public alerts: Array<IAlert> = [];
  private backup: Array<IAlert>;
  constructor() {
      this.alerts.push({
          id: 1,
          type: 'success',
          strong: 'Success!',
          message: 'This is a success alert—check it out!',
          icon: 'ni ni-like-2'
      }, {
          id: 2,
          strong: 'Info!',
          type: 'info',
          message: 'This is an info alert—check it out!',
          icon: 'ni ni-bell-55'
      }, {
          id: 3,
          type: 'warning',
          strong: 'Warning!',
          message: 'This is a warning alert—check it out!',
          icon: 'ni ni-bell-55'
      }, {
          id: 4,
          type: 'danger',
          strong: 'Danger!',
          message: 'This is a danger alert—check it out!',
          icon: 'ni ni-support-16'
      });
      this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  close(alert: IAlert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
