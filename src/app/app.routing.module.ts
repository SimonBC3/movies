import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import * as path from 'path';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
    {path:'', redirectTo:'list', pathMatch:'full'},
    {path:'list', component: ListComponent},
    {path:'details', component: DetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ListComponent, DetailsComponent]