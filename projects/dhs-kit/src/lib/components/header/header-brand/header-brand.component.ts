import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'dhs-header-brand',
  templateUrl: './header-brand.component.html',
  styleUrls: ['./header-brand.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DhsHeaderBrandComponent implements OnInit {
  @Input() title: string;
  @Input() subline: string;
  @Input() brandImage: string;
  @Input() brandImageAlt: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
