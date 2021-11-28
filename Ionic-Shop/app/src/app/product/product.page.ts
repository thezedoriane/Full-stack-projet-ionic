import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute,ParamMap, Router  } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  todo : any;
  api : RestService;
  id : string;
  name : string;

  private todo_product : FormGroup;
  public api_product : RestService;

  constructor(public restapi_product: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    public restapi: RestService,
    private formBuilder: FormBuilder) {
      this.todo_product = this.formBuilder.group({
            name: [''],
            price: [''],
            description: [''],
            
          });
      this.api_product = restapi_product;
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


  async saveProduct(){
    await this.api_product.createProduct(this.todo_product.value,)
    .subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.todo_product.value);
    this.saveProduct();

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.readCategory(this.id);
  }


  ionViewWillEnter() {
    this.ngOnInit();
  }

}

