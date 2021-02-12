import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Mod3Module } from './mod3/mod3.module';



@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule,
    Mod3Module
  ],
  exports: [Comp1Component]
})
export class Mod2Module { }
