// core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    userData!: User;

  constructor(
    // private afAuth: AngularFireAuth,
    // private afs: AngularFirestore,
    // private router: Router,
    // private toastr: ToastrService
  ) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.afs.doc<User>(`users/${user.uid}`).valueChanges().subscribe(userData => {
    //       this.userData = userData;
    //     });
    //   } else {
    //     // this.userData = null; // X [ERROR] TS2322: Type 'null' is not assignable to type 'User'. [plugin angular-compiler]
    //   }
    // });
  }

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