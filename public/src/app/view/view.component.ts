import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
import { parseTemplate } from '@angular/compiler';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  pets:any=[];
  pet:any=[];
  petId = this._httpService.oneId;
  isValid:boolean=false;
 
  num;
  count=0;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getPet();
  }

  getPet(){
    let ob = this._httpService.show(this.petId);
    ob.subscribe(data=>{
      console.log("got one", data);
      this.pet = data;
    })
  }
  deleteOnClick(id){
    let ob = this._httpService.deleteOnePet(id);
    ob.subscribe(data=>{
      console.log("deleted", data);
      this.goHome();
    })
  }

  goHome(){
    this._router.navigate(['/pets']);
  }

  likeMe(id,pet,num){
    if(this.isValid==false){
      this.isValid=true;
    }
      console.log(num);
    let ob = this._httpService.addLike(id,pet.like+num);
    ob.subscribe(data=>{
      console.log("incresed", data);
    })
  }

  increment(count) {
    console.log("HI");
  this.count++;
  console.log(this.count);
}

}
