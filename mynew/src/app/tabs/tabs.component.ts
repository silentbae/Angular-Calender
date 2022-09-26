import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Contact } from './contact.model';
import { Qualifications } from './qualifications.model';
import {Workhistory} from './workhistory.model'




interface Quali_fication{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class TabsComponent implements OnInit {
   firstFormGroup = this._formBuilder.group({
    personaldt_firstCtrl:new FormControl('', Validators.required),
    personaldt_secondCtrl:new FormControl('', Validators.required),
    personaldt_thirdCtrl:new FormControl('', Validators.required),
    personaldt_fourthCtrl:new FormControl('', Validators.required),
    personaldt_fivthCtrl:new FormControl('', Validators.required),

  });


  secondFormGroup = this._formBuilder.group({
    // qualdt_fourthCtrl:['', Validators.required],
    // qualdt_fivthCtrl:['', Validators.required],
    qualdt_fourthCtrl: new FormControl('', Validators.required),
    qualdt_fivthCtrl: new FormControl('', Validators.required),
    qualdt_sixthCtrl: new FormControl('', Validators.required),
  });
  


  thirdFormGroup = this._formBuilder.group({
    whdt_fivthCtrl: new FormControl('', Validators.required),
    whdt_sixthCtrl: new FormControl('', Validators.required),
    whdt_seventhCtrl:new FormControl('', Validators.required),
    whdt_eightCtrl:new FormControl('', Validators.required),
});






  Contact = new Contact()
  contact_Array :any =[];
  Qualification=new Qualifications();
  qualifications_Array :any=[];
  Workhistory = new Workhistory;
  workhistory_Array :any=[];
  selectedValue: string | undefined;
  // qualifications: string[] = ['10th', 'plustwo', 'BTECH', 'BBA', 'BCA', 'B.COM','B.sc'];
  qualifications: Quali_fication[] = [
    {value: '10th', viewValue: '10th'},
    {value: 'plustwo', viewValue: 'plustwo'},
    {value: 'BTECH', viewValue: 'BTECH'},
    {value: 'BBA', viewValue: 'BBA'},
    {value: 'BCA', viewValue: 'BCA'},
    {value: 'B.COM', viewValue: 'B.COM'},
    {value: 'B.sc', viewValue: 'B.sc'},

  ];

  constructor(private _formBuilder: FormBuilder){ }
  ngOnInit(): void {
    this.Contact = new Contact()
    this.contact_Array.push(this.Contact);
    this. Qualification = new Qualifications();
    this.qualifications_Array.push(this.Qualification );
    this.Workhistory = new Workhistory;
    this.workhistory_Array.push(this.Workhistory  );

    
  }
  add_Contact(){
    this.Contact = new Contact()
    this.contact_Array.push(this.Contact)
  }
  remove_Contact(index: any){    
    this.contact_Array.splice(index);

  }
  add_qualification(){
    this.Qualification = new Qualifications()
    this.qualifications_Array.push(this.Qualification)

  }
  remove_qualification(index: any){
    this.qualifications_Array.splice(index);
  }
  add_workhistory(){
    this.Workhistory = new Workhistory;
    this.workhistory_Array.push(this.Workhistory  );

  }
  remove_workhistory(index: any){
    this.workhistory_Array.splice(index);
  }
  onSubmit(){
    console.log("submitted")
  }

}
