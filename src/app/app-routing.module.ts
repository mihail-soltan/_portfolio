import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // data: { animation: 'slideInAnimation' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'routeAnimation' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'slideInAnimation' }
  },
  {
    path: 'portfolio/:id',
    component: ProjectComponent,
    data: { animation: 'fader' }
  }
];

@NgModule({
  imports: [BrowserAnimationsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
