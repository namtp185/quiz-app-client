import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {

  title: string = 'quiz-app-client';

  constructor() { }

  ngOnInit(): void {
  }

}
