import { KitHeaderModule } from './header.module';

describe('KitHeaderModule', () => {
  let headerModule: KitHeaderModule;

  beforeEach(() => {
    headerModule = new KitHeaderModule();
  });

  it('should create an instance', () => {
    expect(headerModule).toBeTruthy();
  });
});
