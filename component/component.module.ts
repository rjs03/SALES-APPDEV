import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentPageRoutingModule } from './component.routing.module';

import { ComponentPage } from './component.page';
import { ModalComponent } from '../modal/modal.component';
import { SliderComponent } from '../slider/slider.component';
import { TabsComponent } from 'src/tabs/tabs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentPageRoutingModule
  ],
  declarations: [ComponentPage, ModalComponent, SliderComponent, TabsComponent]
})
export class ComponentPageModule {}