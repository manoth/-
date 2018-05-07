import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  menuName: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.menuName = route.root.firstChild.snapshot.data['menuName'];
    console.log(this.menuName);
  }

  ngOnInit() {
  }

}
