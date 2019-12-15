import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mail-list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'mail-list',
    loadChildren: () => import('./pages/mail-list/mail-list.module').then( m => m.MailListPageModule)
  },
  {
    path: 'mail-detail',
    loadChildren: () => import('./pages/mail-detail/mail-detail.module').then( m => m.MailDetailPageModule)
  },
  {
    path: 'compose-mail',
    loadChildren: () => import('./pages/compose-mail/compose-mail.module').then( m => m.ComposeMailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
