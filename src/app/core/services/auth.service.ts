// core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user/user.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    userData!: User;

    constructor() {}

  async login(email: string, password: string) {
    try {
      // const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      // this.toastr.success('Sikeres bejelentkezés!');
      // this.router.navigate(['/']);
    } catch (error) {
      // this.toastr.error('Hibás email vagy jelszó!');
    }
  }

  async register(userData: User, password: string) {
    try {
      // const result = await this.afAuth.createUserWithEmailAndPassword(userData.email, password);
      // await this.afs.doc(`users/${result.user.uid}`).set({
    //     ...userData,
    //     id: result.user.uid
    //   });
    //   this.toastr.success('Sikeres regisztráció!');
    //   this.router.navigate(['/']);
    } catch (error) {
    //   this.toastr.error('Hiba történt a regisztráció során!');
    }
  }

  logout() {
    // this.afAuth.signOut().then(() => {
      // this.router.navigate(['/auth/login']);
    // });
  }

  get isLoggedIn(): boolean {
    // return this.userData !== null;
    return true;
  }

  get isAdmin(): boolean {
    // return this.isLoggedIn && this.userData.role === 'admin';
    return true;
  }
}