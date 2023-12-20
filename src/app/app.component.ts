import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StarComponent } from './star/star.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ImagenesBoton';

  buttons=["😀","😢","🤪"];
  images =["https://i.pinimg.com/originals/f2/ce/c9/f2cec98f06e8f66ff0bcfb2ffdb413eb.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sad-dog-1537347496.jpg?resize=480:*","https://townsquare.media/site/757/files/2014/08/names.jpg"]
  statusImg=[false, false, false]
  showImg(index:number){
    if(!this.statusImg[index]){
      this.statusImg.splice(index,1,true)
    }else{
      this.statusImg.splice(index,1,false)
    }
    console.log(this.statusImg);
        
  }

}
