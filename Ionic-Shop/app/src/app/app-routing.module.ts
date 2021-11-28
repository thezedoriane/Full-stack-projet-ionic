import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'viewProduct/:id',
    loadChildren: () => import('./viewProduct/viewProduct.module').then( m => m.ViewProductPageModule)
  },
  {
    path: 'addproduct',
    loadChildren: () => import('./addproduct/addproduct.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
