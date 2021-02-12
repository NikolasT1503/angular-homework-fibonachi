import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Mod2Module } from './mod2/mod2.module';


@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule,
    Mod2Module
  ],
  exports: [Comp1Component]
})
export class Mod1Module { }
