import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Qualification } from './qualification.model';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!:FormGroup;
  thirdFormGroup!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  Qualification = new Qualification()
  dataarray :any =[];




  ngOnInit(): void {
      this.firstFormGroup  = this.formBuilder.group ({
        firstCtrl_1: [''],
        secondCtrl_2: [''],
        thirdCtrl_3:['',Validators.required],
        fourthCtrl_4:['',Validators.required],
        fivthCtrl_5:['',Validators.required]
      })
      this.secondFormGroup = this.formBuilder.group({
        firstCtrl_2: [''],
        secondCtrl_2: ['', Validators.required],
      })
      this.thirdFormGroup = this.formBuilder.group({
        thirdCtrl: ['', Validators.required],
      })

    this.Qualification = new Qualification()
    this.dataarray.push(this.Qualification);

  }
  addForm(){
    this.Qualification = new Qualification()
    this.dataarray.push(this.Qualification)
  }
  removeForm(index: any){  
    this.dataarray.splice(index);

  }
}
