import { CeoComponent } from './ceo/ceo.component';
import { MeComponent } from './me/me.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'me',
        component: MeComponent,
      },
      {
        path: 'ceo',
        component: CeoComponent,
      },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/contact' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
