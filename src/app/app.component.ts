import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomSidenavComponent } from "./components/custom-sidenav/custom-sidenav.component";
import { LoginComponent } from "./pages/login/login.component";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, CustomSidenavComponent, LoginComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  showButton: boolean = false;

  constructor() {
    this.checkRoute();
  }

  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');

  checkRoute() {
    const currentPath = window.location.pathname;
    this.showButton = currentPath !== '/login';
  }
}
