import { Component } from '@angular/core';
import { FrontNavbar } from '../../components/front-navbar/front-navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-store-from-layout',
  imports: [RouterOutlet, FrontNavbar],
  templateUrl: './store-from-layout.html',
})
export class StoreFromLayout {}
