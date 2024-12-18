import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantComponent } from './participant/participant.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'participant-list', component: ParticipantListComponent },
    { path: 'participant/:id', component: ParticipantComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/register', pathMatch: 'full' }
];