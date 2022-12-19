import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import * as path from 'path';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
    {path:'', redirectTo:'list', pathMatch:'full'},
    {path:'list', component: ListComponent},
    {path:'details/:id', component: DetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ListComponent, DetailsComponent]