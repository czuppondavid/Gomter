/*
* File: henger.component.ts
* Author: Czuppon Dávid
* Copyright: 2024,Czuppon Dávid
* Group: Szoft II/2/E
* Date: 2025-02-02
* Github: https://github.com/czuppondavid/Gomter.git
* Licenc: MIT
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gomb',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gomb.component.html',
  styleUrl: './gomb.component.css'
})
export class GombComponent {

  diameter ! : number;
  capacity ! : number;
  area ! : number;

  startCalc(){

    this.capacity = (4 / 3) * Math.PI * Math.pow(this.diameter/2, 3);
    this.area = 4 * Math.PI * Math.pow(this.diameter/2, 2); 
  
  }

 
  }




