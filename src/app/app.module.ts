/*Angular*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/*App Components*/
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { ApiService } from './services/api.services';
import { AppRoutingModule, routingComponents } from './app.routing.module';

/*Angular materials*/
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule, MatCardHeader, MatCardSubtitle, MatCardContent, MatCardFooter } from '@angular/material/card'
import { MatDivider } from '@angular/material/divider'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
    MatDivider,

    MatCardFooter
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
