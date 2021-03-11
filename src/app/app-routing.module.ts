import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then((mod) => mod.PagesModule),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((mod) => mod.AuthModule),
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: LandingPageComponent,
  },
  {
    path: "**",
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
