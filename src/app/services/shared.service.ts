import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console.log("A fake HTTP call.....")
   }

  mySharedFunction(){
    console.log("mySharedFunction is called.");
  }
}
