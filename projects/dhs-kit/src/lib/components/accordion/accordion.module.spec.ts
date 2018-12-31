import { KitAccordionModule } from './accordion.module';

describe('KitAccordionModule', () => {
  let kitAccordionModule: KitAccordionModule;

  beforeEach(() => {
    kitAccordionModule = new KitAccordionModule();
  });

  it('should create an instance', () => {
    expect(kitAccordionModule).toBeTruthy();
  });
});
