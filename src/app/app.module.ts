import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { RouterModule,Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersService } from './users.service';
import { RepositoryComponent } from './repository/repository.component';

const appRouting:Routes=[
  {
    path:'',component:UserProfileComponent
  },
  {
    path:'repository',component:RepositoryComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    GitProfileComponent,
    UserProfileComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouting)

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
