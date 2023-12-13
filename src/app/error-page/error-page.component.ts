import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit{

  errMessage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.errMessage = this.route.snapshot.data['message'];
  }
}
