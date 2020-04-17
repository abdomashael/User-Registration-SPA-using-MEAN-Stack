import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {EditComponent} from './components/edit/edit.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: 'userdetails/:id', component: UserDetailsComponent},
  {path: 'userdetails/:id/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
