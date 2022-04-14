import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NebulaIconComponent} from './icon.component';

const components = [NebulaIconComponent];

@NgModule({
    imports: [CommonModule],
    declarations: components,
    exports: components,
})
export class NuiIconModule {}
