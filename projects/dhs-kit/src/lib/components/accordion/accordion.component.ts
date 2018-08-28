import { Component, Input, ViewEncapsulation } from '@angular/core';

let uniqueId = 0;

let classMapping = [['dark', 'dhs-accordion--dark']];

@Component({
  selector: 'dhs-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DhsAccordionComponent {
  @Input()
  title: string;
  @Input()
  dark: boolean;

  _controlId = `dhsAccordion_${uniqueId++}`;

  expanded = false;
  get expandedClass(): string {
    return this.expanded ? 'dhs-accordion--open' : 'dhs-accordion--closed';
  }

  getClasses() {
    return classMapping.map(prop => (this[prop[0]] ? prop[1] : ''));
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
