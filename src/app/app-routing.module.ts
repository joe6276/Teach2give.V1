import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", loadComponent: () => import('../app/components/home/home.component').then(
      component => component.HomeComponent
    )
  },
  {
    path: "about", loadComponent: () => import('../app/components/about/about.component').then(
      component => component.AboutComponent
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
