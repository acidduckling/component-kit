import { Component, Input } from '@angular/core';

let uniqueId = 0;

@Component({
  selector: 'dhs-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class DhsAccordionComponent {
  @Input()
  title: string;

  _controlId = `dhsAccordion_${uniqueId++}`;

  expanded = false;
  get expandedClass(): string {
    return this.expanded ? 'dhs-accordion--open' : 'dhs-accordion--closed';
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
