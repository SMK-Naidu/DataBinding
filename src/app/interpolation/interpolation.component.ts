import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
 tittle='Interpolation';
 pageheading="AriqtInternational";
 pagecount=12;
sampleObjects={'firstName':'Ariqt', 'lastName':'International'};
userloggedin=true;
firstname="smk";
lastname="naidu";
age=26;
position="Intern";
Location="Hyderabad";
salary=12000;
ColVal=5;
imageSource='https://st2.depositphotos.com/1141099/6198/i/450/depositphotos_61983329-stock-photo-historic-charminar.jpg'
imageHeight= "500";
hieveryone(){
  console.log("hi from Ariqt international")
}
  constructor() { }

  ngOnInit(): void {
  }

}
