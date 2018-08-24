import { DhsAccordionModule } from './accordion.module';

describe('DhsAccordionModule', () => {
  let dhsAccordionModule: DhsAccordionModule;

  beforeEach(() => {
    dhsAccordionModule = new DhsAccordionModule();
  });

  it('should create an instance', () => {
    expect(dhsAccordionModule).toBeTruthy();
  });
});
