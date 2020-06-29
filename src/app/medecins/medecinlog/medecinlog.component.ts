import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medecinlog',
  templateUrl: './medecinlog.component.html',
  styleUrls: ['./medecinlog.component.css']
})
export class MedecinlogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  test( data)
  {
    if(data.email=="true") {this.router.navigate(['/pageMedecin']);}
    
    else{ alert('erreur')}

    
  }

}
