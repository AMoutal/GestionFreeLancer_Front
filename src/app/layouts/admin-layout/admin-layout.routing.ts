import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { FreelancersComponent } from 'src/app/pages/freelancers/freelancers.component';
import { EntrepriseComponent } from 'src/app/pages/entreprise/entreprise.component';
import { EditFreelancerComponent } from 'src/app/pages/edit-freelancer/edit-freelancer.component';
import { EditEntrepriseComponent } from 'src/app/pages/edit-entreprise/edit-entreprise.component';
import { TestComponent } from 'src/app/pages/test/test.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'freelancers', component: FreelancersComponent },
    { path: 'entreprises', component: EntrepriseComponent },
    { path: 'freelancers/edit-freelancer', component: EditFreelancerComponent },
    { path: 'editEntreprise', component: EditEntrepriseComponent },
    { path: 'tests',           component: TestComponent}
];
