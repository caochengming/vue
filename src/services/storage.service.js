import Storage from '@/config/storage';
import { LS_KYES } from '@/config/constants';

/**
 * all localStorage/sessionStorage operatino in this service.
 * @private private class using in auth.service
 * @kind cache.service
 */
class StorageCache {
  constructor() {
    this.store = Storage.getLocalStorage();
  }

  // clear

  clear() {
    this.store.clear();
  }

  // token

  saveToken(token) {
    return this.store.set(LS_KYES.TOKEN, token);
  }

  getToken() {
    return this.store.get(LS_KYES.TOKEN);
  }

  removeToken() {
    return this.store.remove(LS_KYES.TOKEN);
  }

}

export default new StorageCache();
