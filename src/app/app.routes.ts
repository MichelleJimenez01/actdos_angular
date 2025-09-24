
import { Products } from './pages/products/products';
import { About } from './pages/about/about';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path: '',component:Home},
    {path:'nosotros',component:About},
    {path:'productos',component:Products},
    {path:'contact',component:Contact},
    {path:'**',redirectTo:''}
];
