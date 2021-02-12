import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Mod4Module } from './mod4/mod4.module';



@NgModule({
  declarations: [Comp1Component, Comp2Component],
  imports: [
    CommonModule,
    Mod4Module
  ],
  exports: [Comp1Component, Comp2Component]
})
export class Mod3Module { }
