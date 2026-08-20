import { Component } from '@angular/core';
import { SideMenuOptions } from '../side-menu-options/side-menu-options.component';
import { GifsSideMenuHeaderComponent } from '../side-menu-header/side-menu-header.component';

@Component({
  selector: 'gifs-side-menu',
  imports: [
    GifsSideMenuHeaderComponent,
    SideMenuOptions
  ],
  templateUrl: './side-menu.component.html',
})
export class SideMenu {}
