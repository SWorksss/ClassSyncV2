import {ChangeDetectionStrategy, Component, NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
    constructor() { }
}
//
// @NgModule({
//   imports: [
//      BrowserModule, ReactiveFormsModule, BrowserAnimationsModule
//   ],
//   declarations: [ LoginComponent ],
//   bootstrap:    [ LoginComponent ],
//   providers: []
// })
//
// export class LoginModule { }
