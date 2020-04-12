import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FixtureComponent } from './fixture/fixture.component';
import { ImportarDatosComponent } from './importar-datos/importar-datos.component';
import { ChallengeComponent } from './challenge/challenge.component';


const routes: Routes = [
    { path:"", component: HomeComponent},
    {path:"fixture", component: FixtureComponent},
    {path:"importar-datos", component:ImportarDatosComponent},
    {path:"challenge", component:ChallengeComponent},
    {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
