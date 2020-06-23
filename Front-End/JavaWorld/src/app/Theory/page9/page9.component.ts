import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.css']
})
export class Page9Component implements OnInit {

  mystring:string = "public class CLA { <br>\
    &emsp; public static void main(String args[]) { <br>\
      &emsp; &emsp; for(int i = 0; i &#8249 args.length; i++) { <br>\
        &emsp; &emsp; &emsp; System.out.println(\"args[\" + i + \"] : \" +args[i]); <br>\
        &emsp; &emsp; } <br>\
        &emsp;} <br>\
      }";

  constructor() { }

  ngOnInit(): void {
    document.getElementById("code-example").innerHTML = this.mystring;
  }

}
