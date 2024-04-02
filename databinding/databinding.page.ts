import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertButton } from '@ionic/angular';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.page.html',
  styleUrls: ['./databinding.page.scss'],
})
export class DatabindingPage implements OnInit {
  name:string = "";
  pass:string = "";
  rep:string = "";

  constructor(private route: Router, private toastController: ToastController, private alertController: AlertController) { }

  ngOnInit() {
  }

   async alert(){
    const toast = await this.alertController.create({
      message: 'Login Success'
    });
      toast.present();
   }

}
