import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connect=false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isConnect(){
    this.connect=true;
    
  }

  test( data)
  {
    if(data.email=="true") {this.router.navigate(['/pageAdmin']);}
    
    else{ alert('erreur')}

    
  }

}
