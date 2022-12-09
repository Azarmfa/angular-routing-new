import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  routerId: any;
  userDetails: any;
  constructor(
    private router: Router,
    private actroute: ActivatedRoute,
    private data: DataService
  ) {
    this.routerId = this.actroute.snapshot.paramMap.get('id');
    console.log(this.routerId);

    this.userDetails = this.data
      .getusersList()
      .filter((user) => user.id == this.routerId);
    console.log(this.userDetails);
  }
}
