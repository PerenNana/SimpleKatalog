import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Song } from '../song';
import { StartRatingComponent } from "../shared/components/star-rating/star-rating.component";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Component({
    selector: 'app-song-list',
    standalone:true,
    templateUrl: './song-list.component.html',
    styleUrl: './song-list.component.css',
    imports: [CommonModule, FormsModule, StartRatingComponent]
})

export class SongListComponent implements OnInit{
    title : string = 'Song List';

    private readonly SONG_API_URL = 'api/songs.json';
    

    songs : Song[] = 
    [
        {
            songId: 1,
            artist: 'Joeboy',
            title: 'Lonely',
            year: 2021,
            genre: 'Afro-beats',
            link: 'https://www.youtube.com/watch?v=WvWFVW4lRVU',
            imageUrl: 'assets/img/joeboy2.jpg'
        
        },
        {
            songId: 2,
            artist: 'Asake',
            title: 'Lonely At The Top',
            year: 2023,
            genre: 'Afro-beats',
            link: 'https://www.youtube.com/watch?v=bbVZo4Yw7pI',
            imageUrl: 'assets/img/asake2.jpg'
             
        },
        {
            songId: 3,
            artist: 'Ckay',
            title: 'Emiliana',
            year: 2022,
            genre: 'Afro-beats',
            link: 'https://www.youtube.com/watch?v=Ypr5QN7Xn_M',
            imageUrl: 'assets/img/ckay2.jpg'
            
        },
        {
            songId: 4,
            artist: 'Tems',
            title: 'Free Mind',
            year: 2022,
            genre: 'Afro-beats',
            link: 'https://www.youtube.com/watch?v=1JltlSJH5bY',
            imageUrl: 'assets/img/tems.jpg'
            
        },
        {
            songId: 5,
            artist: 'Burna Boy',
            title: 'Common Person',
            year: 2023,
            genre: 'Afro-beats',
            link: 'https://www.youtube.com/watch?v=8560CAdA0Ys',
            imageUrl: 'assets/img/burna.jpg' 
            
        },
        {
            songId: 6,
            artist: 'Patoranking',
            title: 'Babylon',
            year: 2023,
            genre: 'Afro-beats',
            link: 'https://www.youtube.com/watch?v=7b0ETFcWrgY',
            imageUrl: 'assets/img/patoranking.jpg' 
            
        },
        {
            songId: 7,
            artist: 'Ghetto Boy',
            title: 'Gentle O',
            year: 2021,
            genre: 'Afro-beats',
            link: 'https://www.youtube.com/watch?v=HsEDDMrHvD0',
            imageUrl: 'assets/img/ghetto_boy.jpg' 
            
        },
        {
            songId: 8,
            artist: 'Mr Eazi',
            title: 'Tchop Time, No Friend',
            year: 2024,
            genre: 'Afro-beats',
            link: 'https://www.youtube.com/watch?v=YkJSrFO28No',
            imageUrl: 'assets/img/mr_eazi.jpg' 
            
        },
        {
            songId: 9,
            artist: 'Wizkid',
            title: 'Diamonds',
            year: 2024,
            genre: 'Afro-beats',
            link: 'https://www.youtube.com/watch?v=utmQRZSs6SE',
            imageUrl: 'assets/img/wizkid2.jpeg' 
            
        }
    ];                
    ;
    showBadge: boolean = false;
    comment : string = '';
    date_actual : Date = new Date(); 
    private _songFilter : string = 'word';
    filteredSongs : Song[] = [];

    constructor(private http: HttpClient){

    }

    public getHotels(): Observable<Song[]>{
        return this.http.get<Song[]>(this.SONG_API_URL).pipe(
            tap(songs=>console.log('songs: ', songs)),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }

    ngOnInit(): void {

        this.filteredSongs = this.songs; 
        this._songFilter = '';
    }

    public toggleIsNewBadge() : void {
        this.showBadge = !this.showBadge;
    }

    get songFilter(): string{
        return this._songFilter;
    }

    set songFilter(filter : string){

        this._songFilter = filter;

        this.filteredSongs = this._songFilter ? this.FilterSongs(this._songFilter) : this.songs;
    }

    private FilterSongs(criteria: string): Song[]{
        criteria = criteria.toLocaleLowerCase();

        const res: Song[] = this.songs;

        const result = res.filter((song) => song.title.toLocaleLowerCase().indexOf(criteria) !== -1 || song.artist.toLocaleLowerCase().indexOf(criteria) !== -1);

        return result;
    }
    
}