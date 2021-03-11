import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { AuthGuardService } from "../service/auth-guard.service";
import { AboutUsPageComponent } from "./about-us-page/about-us-page.component";
import { GalleryPageComponent } from "./gallery-page/gallery-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "gallery",
        component: GalleryPageComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "about-us",
        component: AboutUsPageComponent,
      },
      {
        path: "home",
        component: HomePageComponent,
      },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", component: HomePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
