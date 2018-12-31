import { Inject, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

export type KitTheme = 'dark' | 'light';

export interface IKitKitOptions {
  theme: KitTheme;
}

@NgModule()
export class KitKitModule {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  // Maps the theme with the classes that will be applied to the body when initialising the module using init()
  static classMap = {
    light: ['kit-body', 'js'],
    dark: ['kit-body', 'kit-body--dark', 'js'],
  };

  /**
   * Initialise the Kit Kit by applying appropriate classes to the body of the current document
   * @param theme The base palette theme to apply to the page. Can be 'light' or 'dark'
   */
  static init(options: IKitKitOptions): typeof KitKitModule {
    const defaults: IKitKitOptions = {
      theme: 'light',
    };

    options = { ...defaults, ...options };

    document.body.classList.add(...this.classMap[options.theme]);
    return KitKitModule;
  }
}
