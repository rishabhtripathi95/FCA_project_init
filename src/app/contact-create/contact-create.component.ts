import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Validators, FormGroup,FormBuilder, FormControl} from '@angular/forms';


@Component({ 
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  public register: FormGroup;
  
  

  contact : {id, name, description, email} = {id: null, name: "", description: "", email: ""};

  constructor(public dataService: DataService, public fb: FormBuilder) {
    this.register=this.fb.group({
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email])
    }
      
    )
   
   }
 

  ngOnInit() {
  }

  createContact(){
    if (!this.register.valid) {
      return;
    }
    console.log(this.register.value);
    this.dataService.createContact(this.register.value);
  }
  onSubmit(){
    console.log('your data :', this.register);
  }
 
  
}


