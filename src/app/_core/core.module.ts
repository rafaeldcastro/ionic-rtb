import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { CoreComponentsModule } from './components/components.module';

export function jwtTokenGetter() {
    return localStorage.getItem('access_token');
}

@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        CoreComponentsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: jwtTokenGetter
            }
        })
    ],
    exports: [
        FormsModule,
        CoreComponentsModule
    ],
    providers: []
})
export class CoreModule { }
