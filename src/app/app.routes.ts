import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { EventComponent } from './event/event.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseComponent } from './course/course.component';
import { Nested1Component } from './nested-1/nested-1.component';
import { Nested2Component } from './nested-2/nested-2.component';
import { Nested5Component } from './nested-5/nested-5.component';
import { Nested4Component } from './nested-4/nested-4.component';
import { Nested3Component } from './nested-3/nested-3.component';
import { LoginComponent } from './auth/login/login.component';
import { canDeactivateGuard } from './can-deactivate.guard';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'course-page', component: CoursePageComponent, canActivate: [authGuard] },
  {
    path: 'course/:id',
    component: CourseComponent,
    children: [
      {
        path: 'nested-1',
        component: Nested1Component,
      },
      {
        path: 'nested-2',
        component: Nested2Component,
      },
      {
        path: 'nested-3',
        component: Nested3Component,
      },
      {
        path: 'nested-4',
        component: Nested4Component,
      },
      {
        path: 'nested-5',
        component: Nested5Component,
      },
    ],
  },
  { path: 'trainers', component: TrainersComponent },
  { path: 'event', component: EventComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
];
