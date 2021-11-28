import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  todo : any;
  api : RestService;
  id : string;
  name : string;

  todos_product : any;


  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {
    this.api = restapi;

  }

  async readCategory(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.readCategory(this.id)
      .subscribe(res => {
        console.log(res);
        this.todo = res;
        this.id = this.todo.id;
        this.name = this.todo.name;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async readProducts() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.readProducts()
      .subscribe(res => {
        console.log(res);
        this.todos_product = res.filter((aTodo_product) => {
          return aTodo_product.done == false
        });
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async deleteProduct(id:any){
    await this.api.deleteProduct(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  delete(id:any) {
    this.deleteProduct(id);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.readCategory(this.id);
    this.readProducts();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }
}
