import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import * as Web3 from 'web3';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-malades',
  templateUrl: './malades.component.html',
  styleUrls: ['./malades.component.css']
})
export class MaladesComponent implements OnInit {

  CurrentDate: string = new Date().toDateString();
  CurrentTime = new Date();
  constructor() { }

  ngOnInit() {
  }

}
