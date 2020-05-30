import { NgModule } from '@angular/core';

import { UIAngularMaterialModule } from 'app/main/ui/angular-material/angular-material.module';
import { UICardsModule } from 'app/main/ui/cards/cards.module';
import { UIFormsModule } from 'app/main/ui/forms/forms.module';
import { UIIconsModule } from 'app/main/ui/icons/icons.module';
import { UITypographyModule } from 'app/main/ui/typography/typography.module';
import { UIHelperClassesModule } from 'app/main/ui/helper-classes/helper-classes.module';
import { UIPageLayoutsModule } from 'app/main/ui/page-layouts/page-layouts.module';
import { UIColorsModule } from 'app/main/ui/colors/colors.module';

@NgModule({
    imports: [
        UIAngularMaterialModule,
        UICardsModule,
        UIFormsModule,
        UIIconsModule,
        UITypographyModule,
        UIHelperClassesModule,
        UIPageLayoutsModule,
        UIColorsModule
    ]
})
export class UIModule
{
}
