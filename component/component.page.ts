import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { TabsComponent } from "src/tabs/tabs.component";
import { ToastController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";

@Component ({
    selector: 'app-component',
    templateUrl: './component.html',
    styleUrls: ['./component.page.scss'],    
})
export class ComponentPage implements OnInit {
    
    constructor(private route : Router, private modalController : ModalController, private tabs : TabsComponent, private toastController: ToastController) { }

    ngOnInit() {
    }

toggleTab(component: TabsComponent){
    this.route.navigate(["components/tabs"])
}
async toggleModel(){
    const model = await this.modalController.create({
        component: ModalController,
        cssClass: 'my-custom-class'
    });
return await model.present();
}

goButtons(){
    this.route.navigate(['buttons.html'])

}

async presentToast(){
    const toast = await this.toastController.create({
        message: 'Your toast message here',
        duration: 2000
    });

}

}