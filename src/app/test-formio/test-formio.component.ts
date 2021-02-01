import { Component, OnInit } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';

@Component({
  selector: 'test-formio',
  templateUrl: './test-formio.component.html',
  styleUrls: ['./test-formio.component.less']
})
export class TestFormioComponent implements OnInit {

  
  constructor(
    public config: FormioAppConfig,
  ) {}

  ngOnInit(): void {
  }

}
