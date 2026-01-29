import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Service } from './components/service/service';
import { Contactus } from './components/contactus/contactus';
import { Product } from './UI/product/product';
import { Single } from './components/single/single';


export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:Home},
    {path:'about', component:About},
    {path:'service', component:Service},
    {path:'contactus', component:Contactus},
    {path:'product',component:Product},
    {path:'singleview/:titleid',component:Single}
    
];
