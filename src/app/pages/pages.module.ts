import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { AboutUsPageComponent } from "./about-us-page/about-us-page.component";
import { PagesComponent } from "./pages.component";
import { GalleryPageComponent } from "./gallery-page/gallery-page.component";
import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
  declarations: [
    AboutUsPageComponent,
    PagesComponent,
    GalleryPageComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
