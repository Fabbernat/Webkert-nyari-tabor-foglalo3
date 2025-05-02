import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { CampComponent } from './shared/models/camp/camp.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app', component: AppComponent },
  { path: 'gallery', component: GalleryComponent },

  // Auth routes
  { path: 'signup', component: RegisterComponent },
  { path: 'regisztracio', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bejelentkezes', redirectTo: 'login', pathMatch: 'full' },
  { path: 'camp', component: CampComponent },
  { path: 'camps', component: CampComponent },
  { path: 'camps/create', component: CampComponent },

  { path: 'logout', redirectTo: '', pathMatch: 'full' }, // This should be handled by auth service

  // Fallback route (should be last)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
