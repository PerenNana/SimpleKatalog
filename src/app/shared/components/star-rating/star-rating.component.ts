import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector:'app-star-rating',
    standalone: true,
    templateUrl: './star-rating.component.html',
    styleUrl: './star-rating.component.css'
})

export class StartRatingComponent implements OnChanges{

    starWidth: number = 2;

    rating: number = 2;

    ngOnChanges(): void {
        this.starWidth = this.rating * 125 / 5;
    }
}