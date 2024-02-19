import { Component, Inject, } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import * as AOS from 'aos';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, RouterModule]
})

export class AppComponent {
  title = 'MENTOR';
  // document: any;
windowScrolled: any;
  
  onActivate(event: any) { 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 }

//  back-to-top 
 constructor(@Inject(DOCUMENT) private document: Document) {}
  scrollToTop(): void {
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }

  // ending------------

  // aos animation 

  ngOnInit(){
    AOS.init();
   }
}

