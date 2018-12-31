import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'kit-header-brand',
  templateUrl: './header-brand.component.html',
  styleUrls: ['./header-brand.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KitHeaderBrandComponent implements OnInit {
  @Input() title: string;
  @Input() subline: string;
  @Input() brandImage: string;
  @Input() brandImageAlt: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
