import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';

import { DocsChangelogComponent } from 'app/main/documentation/changelog/changelog.component';

const routes: Routes = [
    {
        path     : 'changelog',
        component: DocsChangelogComponent
    },
    {
        path        : 'getting-started',
        loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedModule)
    },
    {
        path        : 'working-with-fuse',
        loadChildren: () => import('./working-with-fuse/working-with-fuse.module').then(m => m.WorkingWithFuseModule)
    },
    {
        path        : 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
    },
    {
        path        : 'components-third-party',
        loadChildren: () => import('./components-third-party/components-third-party.module').then(m => m.ComponentsThirdPartyModule)
    },
    {
        path        : 'directives',
        loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
    },
    {
        path        : 'services',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
    }
];

@NgModule({
    declarations: [
        DocsChangelogComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule
    ]
})
export class DocumentationModule
{
}
