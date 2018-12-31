import { Component, Input, ViewEncapsulation } from '@angular/core';

let uniqueId = 0;

let classMapping = [['dark', 'kit-accordion--dark']];

@Component({
  selector: 'kit-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class KitAccordionComponent {
  @Input()
  title: string;
  @Input()
  dark: boolean;

  _controlId = `kitAccordion_${uniqueId++}`;

  expanded = false;
  get expandedClass(): string {
    return this.expanded ? 'kit-accordion--open' : 'kit-accordion--closed';
  }

  getClasses() {
    return classMapping.map(prop => (this[prop[0]] ? prop[1] : ''));
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
