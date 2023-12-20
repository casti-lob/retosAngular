import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star.component.html'
})
export class StarComponent implements OnInit {
  @Input() stars:number=0 ;
  showStars: string[]=[]
  renderLike(stars:number){
    if(stars>=0&&stars<=5){
      for(let i =1;i<stars;i++){
        this.showStars.push("fa-solid fa-star");
      }
        if(stars%1>0.21&& stars%1<0.79){
          this.showStars.push("fa-regular fa-star-half-stroke");
        }else if(stars%1>0.79){{
          this.showStars.push("fa-solid fa-star");
        }
        for(let i = this.showStars.length;i<5;i++){
          this.showStars.push("fa-regular fa-star");
        }
        }
      }
    
 }

  ngOnInit(){
   this.renderLike(this.stars)
  }

}
