import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  allUser: any = [];
  constructor(private _user: UserService) {
    this._user.GetUser().subscribe((result) => {
      this.allUser = result;
    });
  }

  ngOnInit(): void {}
}
