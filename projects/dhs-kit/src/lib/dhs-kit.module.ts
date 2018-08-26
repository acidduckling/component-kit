import { Inject, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

export type DhsTheme = 'dark' | 'light';

export interface IDhsKitOptions {
  theme: DhsTheme;
}

@NgModule({})
export class DhsKitModule {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  // Maps the theme with the classes that will be applied to the body when initialising the module using init()
  static classMap = {
    light: ['dhs-body', 'js'],
    dark: ['dhs-body', 'dhs-body--dark', 'js'],
  };

  /**
   * Initialise the DHS Kit by applying appropriate classes to the body of the current document
   * @param theme The base palette theme to apply to the page. Can be 'light' or 'dark'
   */
  static init(options: IDhsKitOptions): typeof DhsKitModule {
    const defaults: IDhsKitOptions = {
      theme: 'light',
    };

    options = { ...defaults, ...options };

    document.body.classList.add(...this.classMap[options.theme]);
    return DhsKitModule;
  }
}
