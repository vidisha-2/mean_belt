import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  pet:any;
  errors:any;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.pet={name:"", pettype:"", desc:"", skillZero:"", skillOne:"", skillTwo:""},
    this.errors={name:"", pettype:"", desc:"", skillZero:"", skillOne:"", skillTwo:""}
  }

  createPet(){
    console.log("Im in component");
    let ob=this._httpService.createP(this.pet);
    ob.subscribe(data=>{
      console.log("Created", data);
      if(data['errors']){
        this.errors = data['errors'];
        console.log("Error in creating a new resta", this.errors);
      }
      else{
        this.goHome();
      }
    })
  }
  goHome(){
    this._router.navigate(['/pets']);
  }
}
