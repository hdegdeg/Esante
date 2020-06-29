import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maladelog',
  templateUrl: './maladelog.component.html',
  styleUrls: ['./maladelog.component.css']
})
export class MaladelogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  test( data)
  {
    if(data.email=="true") {this.router.navigate(['/pageMalade']);}
    
    else{ alert('erreur')}

    
  }
  
}
