import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Mod5Module } from './mod5/mod5.module';



@NgModule({
  declarations: [Comp1Component, Comp2Component, Comp3Component],
  imports: [
    CommonModule,
    Mod5Module
  ],
  exports: [Comp1Component, Comp2Component, Comp3Component]
})
export class Mod4Module { }
