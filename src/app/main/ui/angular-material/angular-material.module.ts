import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';
import { AngularMaterialComponent } from 'app/main/ui/angular-material/angular-material.component';

const routes: Routes = [
    {
        path     : 'angular-material',
        component: AngularMaterialComponent
    }
];

@NgModule({
    declarations: [
        AngularMaterialComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        FuseSharedModule
    ]
})
export class UIAngularMaterialModule
{
}
