import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'app', component: AppComponent },
    {path: 'gallery', component: GalleryComponent},

/* TODO ng g c these */
//   { path: 'home', component: HomeComponent },
//   { path: 'camp', component: CampComponent },
//   { path: 'camps', component: CampComponent },
//   { path: 'camps/detail', component: CampDetailsComponent },
//   { path: 'taborok', redirectTo: 'camps', pathMatch: 'full' },
//   { path: 'taborok/detail', redirectTo: 'camps/detail', pathMatch: 'full' },
  
//   // Auth routes
//   { path: 'login', component: LoginComponent },
//   { path: 'bejelentkezes', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'signup', component: RegisterComponent },
//   { path: 'regisztracio', redirectTo: 'signup', pathMatch: 'full' },
//   { path: 'logout', redirectTo: '', pathMatch: 'full' }, // This should be handled by auth service
  
//   // User routes
//   { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
//   { path: 'profil', redirectTo: 'profile', pathMatch: 'full' },
//   { path: 'my-applications', component: ApplicationComponent, canActivate: [AuthGuard] },
//   { path: 'jelentkezesek', redirectTo: 'my-applications', pathMatch: 'full' },
//   { path: 'dokumentumok', component: DocumentComponent, canActivate: [AuthGuard] },
  
//   // Camp types routes
//   { path: 'camp-types', component: CampTypesComponent },
//   { path: 'camp-types/sport', component: CampTypesComponent },
//   { path: 'camp-types/art', component: CampTypesComponent },
//   { path: 'camp-types/science', component: CampTypesComponent },
  
//   // Dashboard routes
//   { path: 'szulo/dashboard', component: ParentDashboardComponent, canActivate: [AuthGuard] },
//   { path: 'pedagogus/dashboard', component: TeacherDashboardComponent, canActivate: [AuthGuard] },
//   { path: 'onkentes/dashboard', component: VolunteerDashboardComponent, canActivate: [AuthGuard] },
  
//   // Admin routes
//   { 
//     path: 'admin', 
//     canActivate: [AdminGuard],
//     children: [
//       { path: 'dashboard', component: AdminDashboardComponent },
//       { path: 'taborok', component: AdminDashboardComponent },
//       { path: 'users', component: AdminDashboardComponent }
//     ]
//   },
  
//   // Info pages
//   { path: 'about', component: AboutComponent },
//   { path: 'privacy', component: PrivacyComponent },
//   { path: 'terms', component: TermsComponent },
//   { path: 'contact', component: ContactComponent },
  
//   // Process application
//   { path: 'process-application', component: ProcessApplicationComponent},

  
  // Fallback route (should be last)
  { path: '**', redirectTo: 'home' }
];
