import { Component } from '@angular/core';
import { PropertyService } from '../shared/property.service';
import {FormBuilder, FormGroup} from '@angular/forms'
import { property } from './properties.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {

  allProperties:any;
  formValue!:FormGroup;
  propertyModelObj:property=new property();
  constructor(private fb:FormBuilder, private api:PropertyService){}
  ngOnInit():void{

    this.formValue=this.fb.group({
      ptitle:[''],
      pprice:[''],
      plocation:[''],
      pdetails:['']

    })
    this.getAllPropert();
  }

  getAllPropert(){
    this.api.getAllProperty().subscribe((res)=>{
      this.allProperties=res;
      console.warn(this.allProperties);
    })

  }

  addProperty(){
    this.propertyModelObj.ptitle=this.formValue.value.ptitle;
    this.propertyModelObj.pprice=this.formValue.value.pprice;
    this.propertyModelObj.plocation=this.formValue.value.plocation;    
    this.propertyModelObj.pdetails=this.formValue.value.pdetails;
    
    this.api.addListing(this.propertyModelObj).subscribe((res)=>{

      console.log(res);
      alert("property added");
      let ref=document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllPropert();
    }, err=>{
      alert("Something wrong");
    })

  }

  deleteProperty(data:any){
    this.api.deleteProperty(data.id).subscribe((res)=>{
      alert("Record Deleted Sucessfully");
      this.getAllPropert();
    })
  }

}
