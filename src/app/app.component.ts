import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SongDetailComponent } from './song-list/song-detail/song-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            SongListComponent,
            HttpClientModule,
            RouterModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;
  message: string;

  constructor(){
    this.title= 'my-app';
    this.message= 'welcome to my afro-beats songs';
  }

}
