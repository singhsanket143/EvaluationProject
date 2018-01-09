import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CreativeSelectorComponent} from './creative-selector/creative-selector.component';
import {ShortListComponent} from './creative-selector/short-list/short-list.component';

const appRoutes = [
  {path: '', component: CreativeSelectorComponent},
  {path: 'shortlist', component: ShortListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
