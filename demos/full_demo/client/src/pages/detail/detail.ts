import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatData } from '../../providers/cat-data';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers:[CatData]
})
export class DetailPage {

  public cat = {name:''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public catData:CatData) {
    let catId = navParams.data.cat;
    this.catData.getCat(catId).subscribe( (cat) => {
      console.log(cat);
      this.cat = cat;
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
