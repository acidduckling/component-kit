import { DhsHeaderModule } from './header.module';

describe('DhsHeaderModule', () => {
  let headerModule: DhsHeaderModule;

  beforeEach(() => {
    headerModule = new DhsHeaderModule();
  });

  it('should create an instance', () => {
    expect(headerModule).toBeTruthy();
  });
});
