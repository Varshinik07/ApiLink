import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-publicapi',
  templateUrl: './publicapi.component.html',
  styleUrls: ['./publicapi.component.css']
})
export class PublicapiComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewApi().subscribe(
      (data)=>{
        this.publicApi=data
      }
    )
   }

publicApi:any={}

  ngOnInit(): void {
  }

}
