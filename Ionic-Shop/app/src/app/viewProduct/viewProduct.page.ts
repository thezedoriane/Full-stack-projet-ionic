import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-viewProduct',
  templateUrl: './viewProduct.page.html',
  styleUrls: ['./viewProduct.page.scss'],
})
export class ViewProductPage implements OnInit {
  todo_product : any;
  api : RestService;
  id : string;
  name : string;
  description : string;
  price : number;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;

  }

  async readProduct(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.readProduct(this.id)
      .subscribe(res => {
        console.log(res);
        this.todo_product = res;
        this.name = this.todo_product.name;
        this.price = this.todo_product.price;
        this.description = this.todo_product.description;
        
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveProduct(){
    await this.api.updateProduct(this.todo_product._id, this.todo_product)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteProduct(){
    await this.api.deleteProduct(this.todo_product._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {

    console.log(this.description);
    console.log(this.price);
    console.log(this.name);
    console.log(this.todo_product._id);

    this.todo_product.name = this.name;
    this.todo_product.price = this.price;
    this.todo_product.description = this.description;
    

    this.saveProduct();

  }

  delete() {

    this.deleteProduct();
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.readProduct(this.id);
  }
}
