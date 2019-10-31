import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Components
import { HandyLinksComponent } from './handy-links.component';

const handyLinksRoutes: Routes = [
    {
        path: 'handy-links',
        component: HandyLinksComponent,
    }
];

export const HandyLinksRoutes: ModuleWithProviders = RouterModule.forChild(handyLinksRoutes);