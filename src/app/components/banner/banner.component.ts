import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Movie } from '../../types/movie';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() shows: Movie[] = [];
  @Input() title = '';
  @Output() selectedShow = new EventEmitter<string>();
  @Input() showsType: 'tv' | 'movie' = 'movie';


  showData(show:any){
   this.selectedShow.emit(show);
  }
}
