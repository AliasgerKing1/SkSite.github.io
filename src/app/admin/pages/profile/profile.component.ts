import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  Admin: any = [];
  constructor(private _admin: AdminService) {
    this._admin.GetAdmin().subscribe((result) => {
      this.Admin = result;
    });
  }

  ngOnInit(): void {}
}
