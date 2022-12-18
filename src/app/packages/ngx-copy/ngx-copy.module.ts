import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PackageNgxCurrencyComponent } from './ngx-copy.component';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';

import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxCurrencyComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxCurrencyComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        MatInputModule,
        MatButtonModule,

        NgxCopyDirective,
    ],
    exports: [],
    schemas: [
    ],
})
export class PackageNgxCurrencyModule { }
