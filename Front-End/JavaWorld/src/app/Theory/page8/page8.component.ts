import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.css']
})
export class Page8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  yes(){
    document.getElementById("yes-button").style.display = "none";
    document.getElementById("no-button").style.display = "none";
    document.getElementById("yes").style.display = "block";
    document.getElementById("no").style.display = "none";
    document.getElementById("after-click").style.display = "block";
  }

  no(){
    document.getElementById("yes-button").style.display = "none";
    document.getElementById("no-button").style.display = "none";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "block";
    document.getElementById("after-click").style.display = "block";
  }

}
