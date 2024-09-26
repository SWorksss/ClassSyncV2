import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'dashboard'
    // },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'schedule',
        component: ScheduleComponent
    },
    {
        path: 'analytics',
        component: AnalyticsComponent
    },
    {
        path: 'comments',
        component: CommentsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
