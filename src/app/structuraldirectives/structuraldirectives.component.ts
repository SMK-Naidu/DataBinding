import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {
 sample_msg=true;
 data="Required data";
 styleProp="Aqua";
 txtcolor="red";
 styleClsProp="c3";
 dispaly=false;
 num="5";
  public subjects=["Angular","Html","Css","Javascript","Bootstrap"]
  constructor() { }

  ngOnInit(): void {
  }
changedata(){
  this.dispaly=!this.dispaly;
}
}
