import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SampleService } from '../sample.service';
import { University } from '../model/sample.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**data: String = '';
  LoadingText: String = 'Loading...';
  isLoading: boolean = true;
  promise1 = this.DataService.hatchData();
  promise2 = this.DataService.catchData();
  originalar = [1,2,3]
  copiedar = [...this.originalar]*/  
  universities: University[]=[];


  constructor(private SampleService: SampleService) {

  }
 
  ngOninit(): void {
    this.SampleService.getUniversities().subscribe(item =>{
      this.universities = item;
    })
  }
/** 
    DataService.hatchData().then( data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      this.isLoading=false;
    });


    
    Promise.all([this.promise1, this.promise2])
    .then(([data1, data2]) => {
      console.log('Data 1', data1);
      console.log('Data 2', data2);
    }) 
    .catch(error => {
      console.error(error.message);
    });


    Promise.race([this.promise1, this.promise2])
    .then(data => {
      console.log('first promise resolve', data);
    }) 
    .catch(error => {
      console.error(error.message);
    });

  }
  goToPage2() {
    if(this.authenticationService.authenticated == true){
      this.route.navigate(['another'])

    }
    else{
      this.route.navigate(['another/']);
    }
    
  }
  goWithAuthenticated(){
    this.authenticationService.authenticated = true;
  }

  ionViewWillEnter() {
    console.log("You will enter home page.")
  }

  ionViewDidEnter() {
    console.log("You did enter home page.")
  }

  ionViewWillLeave() {
    console.log("You will leave home page.")
  }

  ionViewDidLeave() {
    console.log("You did leave home page.")
  }

  

  async fetchData(){
    try{
      this.data = await this.DataService.fetchData();
      console.log(this.data);
    } catch (error){
      console.error(error);
    }
  }*/

  // catchData()
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => {
  //   console.error(error.message);
  // });

  
}
