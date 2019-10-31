import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Components
import { LessonsComponent } from './lessons/lessons.component';

const lessonsRoutes: Routes = [
    {
        path: 'lessons/:week/:day',
        component: LessonsComponent,
    }
];

export const LessonsRoutes: ModuleWithProviders = RouterModule.forChild(lessonsRoutes);