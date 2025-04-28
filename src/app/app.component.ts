import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GalleryComponent, MatGridList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Webkert-nyari-tabor-foglalo3';
}
