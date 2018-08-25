import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dhs-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class DhsAccordionComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() { }
}
