import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet:any;
  petId:any;
  storeinfo:any;
  errors:any;
  oneeId = this._httpService.oneId;
  constructor(private _httpService: HttpService, private _router: Router, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.pet={name:"", pettype:"", desc:"", skillZero:"", skillOne:"", skillTwo:""},
    this.errors={name:"", pettype:"", desc:"", skillZero:"", skillOne:"", skillTwo:""}
    this.getOne(this.oneeId);
  }

  getOne(oneId){
    let ob = this._httpService.show(oneId);
    ob.subscribe(data=>{
      console.log("Got one", data);
      this.storeinfo = data;
      this.pet = {name:this.storeinfo.name, pettype:this.storeinfo.pettype, desc:this.storeinfo.desc, skillZero:this.storeinfo.skillZero, skillOne:this.storeinfo.skillOne, skillTwo:this.storeinfo.skillTwo};
    })
  }
  modifyPet(){
    let ob = this._httpService.updateInfo(this.oneeId, this.pet);
    ob.subscribe(data=>{
      if(data['errors']){
        this.errors = data['errors'];
        console.log("this err", this.errors)
      }
      else{
        console.log("Updated", data);
        this.goHome();
      }
    })
  }

  goHome(){
    this._router.navigate(['/pets']);
  }
}
