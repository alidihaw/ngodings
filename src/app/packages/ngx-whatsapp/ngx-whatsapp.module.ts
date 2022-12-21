import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PackageNgxWhatsappComponent } from './ngx-whatsapp.component';
import { FormsModule } from '@angular/forms';
import { NgxWhatsappModule } from 'packages/ngx-whatsapp/src/public-api';
import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxWhatsappComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxWhatsappComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        NgxWhatsappModule,

        NgxCopyDirective,
    ],
    exports: [],
    schemas: [
    ],
})
export class PackageNgxWhatsappModule { }