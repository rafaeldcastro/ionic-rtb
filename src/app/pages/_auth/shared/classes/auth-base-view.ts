import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { CoreBaseView } from '@app/_core/classes/core-base-view';

import { authRoutesNames } from './../../auth-routes-names';

/**SERVICES */
import { AuthService } from '@shared/services/_auth/auth.service';

export class AuthBaseView extends CoreBaseView{

    authRoutes = authRoutesNames;
    form: FormGroup;

    constructor(protected router: Router, protected authService: AuthService) {
        super();
        this.isAuthenticated();
    }

    protected isAuthenticated() {
        if (this.authService.currentUserValue) {
            this.navigateTo('DASHBOARD');
        }
    }

    get formcontrol() {
        return this.form.controls;
    }

    protected navigateTo(PAGE) {
        
        this.router.navigate([`/${this.mainRoutes[PAGE].route}`]);
    }

    protected onSubmit() {
        if (this.form.invalid) {
            return;
        }
    }
}
