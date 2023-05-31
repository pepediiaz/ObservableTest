import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  numPersonas: number;

  constructor(
    private personasService: PersonasService
  ) { 
    this.numPersonas = 0;
  }
  
  ngOnInit(): void {
    this.personasService.getPersonas$().subscribe(personas => {
      this.numPersonas = personas.length;
    })
  }

}
