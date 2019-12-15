import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // JSON "set" example
  async setObject(obj: any) {
    await Storage.set({
      key: 'user',
      value: JSON.stringify(obj)
    });
  }

  // JSON "get" example
  async getObject(key: string) {
    const ret = await Storage.get({ key: key });
    return JSON.parse(ret.value);
  }


  async getItem() {
    const { value } = await Storage.get({ key: 'name' });
    console.log('Got item: ', value);
  }

  async removeItem() {
    await Storage.remove({ key: 'name' });
  }

  async keys() {
    const { keys } = await Storage.keys();
    console.log('Got keys: ', keys);
  }

  async clear() {
    await Storage.clear();
  }
}
