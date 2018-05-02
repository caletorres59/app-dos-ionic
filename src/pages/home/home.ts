import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  img: string = 'assets/imgs/jam.jpg';
  constructor(public navCtrl: NavController, public cameraPlugin: Camera) {

  }

  takePicture(): void{
    this.cameraPlugin.getPicture({
      quality: 100,
      destinationType: this.cameraPlugin.DestinationType.DATA_URL,
      encodingType: this.cameraPlugin.EncodingType.JPEG,
      mediaType: this.cameraPlugin.MediaType.PICTURE
    }
    ).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.img = base64Image;
     }, (err) => {
       console.log(err);
     });
  }
}
