// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule
  ]
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  loading = true;
  errorMessage = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.loadPopularCamps();
    this.loadUpcomingCamps();
  }

  loadPopularCamps(): void {
    // TODO
  }

  loadUpcomingCamps(): void {
    // TODO
  }

  navigateToCampList(): void {
    this.router.navigate(['/taborok']);
  }

  navigateToDashboard(): void {
    // TODO
  }

  navigateToRegister(): void {
    this.router.navigate(['/regisztracio']);
  }
}