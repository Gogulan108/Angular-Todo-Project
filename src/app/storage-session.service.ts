import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageSessionService {

  constructor() { }
  store(key: string,value: any){
    return sessionStorage.setItem(key, value);
  }

  get(key: string){
    return sessionStorage.getItem(key)
  }
}
