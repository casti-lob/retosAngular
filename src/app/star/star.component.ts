import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html'
})
export class StarComponent implements OnInit {
  @Input() stars:number=0 ;
  showStars: string[]=[]
  renderLike(){
    if(this.stars>=0&&this.stars<=5){
      for(let i =1;i<this.stars;i++){
        if(this.stars%1>0.21&& this.stars%1<0.79){
          this.showStars.push("fa-regular fa-star-half-stroke");
        }else if(this.stars%1>0.79){{
          this.showStars.push("fa-solid fa-star");
        }
        for(let i = this.showStars.length;i<5;i++){
          this.showStars.push("fa-regular fa-star");
        }
        }
      }
    }
 }

  ngOnInit(){
   this.renderLike()
  }

}
