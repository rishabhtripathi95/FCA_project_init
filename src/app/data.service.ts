import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "Rishabh Tripathi", description: "ABCDxyzHello", email: "rishabh.tripathi@email.com"},
    
  ];

  constructor() { }

  public getContacts():Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
    
    this.contacts.push(contact);
  }
}
