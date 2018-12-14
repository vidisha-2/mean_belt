import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets:any=[];
  
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getPets();
  }

  getPets(){
    let ob = this._httpService.getAll();
    ob.subscribe(data=>{
      this.pets = data;
      console.log(`All pets ${data}`);
    })
  }

  sendToView(id){
    this._httpService.show(id);
    this.showViews();
  }

  showViews(){
    this._router.navigate(['/show']);
  }

  sendToEdit(id){
    this._httpService.show(id);
    this.editP();
  }

  editP(){
    this._router.navigate(['/edit/'+this._httpService.oneId]);
  }
}
