import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { CatData } from '../../providers/cat-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[CatData]
})
export class HomePage {

  public cats = new Array();
  private detailPage;

  constructor(public navCtrl: NavController, public catData:CatData) {

    this.detailPage = DetailPage;
    
    this.catData.getCats().subscribe(cats => {
      console.log('cats', cats);
      this.cats = cats;
    });
    
  }

  loadDetail(cat) {
    this.navCtrl.push(this.detailPage, {cat:cat.id});
  }

}
