import { Injectable } from '@angular/core';

import { APP_CONSTANTS } from '@constants/app';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  static loadInitialState() {
    return Object.keys(localStorage).reduce((state: any, storageKey) => {
      if (storageKey.includes(APP_CONSTANTS.APP_PREFIX)) {
        const stateKeys = storageKey
          .replace(APP_CONSTANTS.APP_PREFIX, '')
          .toLowerCase()
          .split('.')
          .map(key =>
            key
              .split('-')
              .map((token, index) =>
                index === 0
                  ? token
                  : token.charAt(0).toUpperCase() + token.slice(1)
              )
              .join('')
          );
        let currentStateRef = state;
        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
            return;
          }
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }
      return state;
    }, {});
  }

  static setItem(key: string, value: any) {
    localStorage.setItem(`${APP_CONSTANTS.APP_PREFIX}${key}`, JSON.stringify(value));
  }

  static getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${APP_CONSTANTS.APP_PREFIX}${key}`));
  }

  static removeItem(key: string) {
    localStorage.removeItem(`${APP_CONSTANTS.APP_PREFIX}${key}`);
  }

  /** Tests that localStorage exists, can be written to, and read from. */
  static testLocalStorage() {
    const testValue = 'testValue';
    const testKey = 'testKey';
    let retrievedValue: string;
    const errorMessage = 'localStorage did not return expected value';

    this.setItem(testKey, testValue);
    retrievedValue = this.getItem(testKey);
    this.removeItem(testKey);

    if (retrievedValue !== testValue) {
      throw new Error(errorMessage);
    }
  }
}
