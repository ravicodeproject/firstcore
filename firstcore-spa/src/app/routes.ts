import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    // path: 'dummy', http://localhost:4200/dummymembers
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members',
        component: MemberListComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      { path: 'lists', component: ListsComponent }
    ]
  },
  // {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
  // {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  // {path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
