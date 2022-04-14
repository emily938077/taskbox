import {Component, OnInit, Input} from '@angular/core';
import { Icon } from '../models/icon.model';

const IconPresets = new Set(['premium', 'beta', 'new', 'text-label']);  //presets
export const ShowMore = {
    src: '../../assets/icon/next.svg',
    text: 'more',
};
export const ShowLess = {
    src: '../../assets/icon/previous.svg',
    text: 'hide',
};

// export type LabelType = 'activate' | 'deactivate' | 'default' | 'nostyle' | 'setting';
// export interface Label {
//     type: LabelType;
//     text: string;
//     subtext?: string;
//     id?: string;
//     value?: any;
// }
@Component({
    selector: 'nui-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class NebulaIconComponent implements OnInit {
    // @Input() src?: string;
    // @Input() presets: string;
    // @Input() labels?: Label[];
    // @Input() numberVisibleChips?: number;
    @Input() icon: Icon;

    badge: string;
    classes: string[];

    showAll: boolean = false;
    iconItem: any = ShowMore;

    ngOnInit() {
        this.classes = [];
        if (this.icon.presets) {
            this.classes = this.icon.presets.split(' ').filter((x) => x.length);
        }
        const badgeName = this.classes.filter((x) => IconPresets.has(x));
        if (badgeName.length) {
            this.badge = badgeName[0];
            this.icon.src = null;
        }
    }

    switchIconItem(event: MouseEvent): void {
        event.stopPropagation();

        this.showAll = !this.showAll;
        this.iconItem = this.showAll ? ShowLess : ShowMore;
    }

    isHideItem(index): boolean {
        return this.icon.numberVisibleChips && !this.showAll && index >= this.icon.numberVisibleChips;
    }
}
