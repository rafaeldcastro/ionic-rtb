import { mainRoutesNames } from '@pages/main/main-routes-names';
import { appRoutesNames } from '@app/app-routes-names';
import { MetaDefinition } from '@angular/platform-browser';

/**NOTIFICATIONS */
import { MainHeaderNotifications } from '@shared/components/main-header/notifications/main-header.notifications';

/**SERVICES */
import { EventEmitterService } from '@shared/services/emitter/event-emitter.service';

export class CoreBaseView {
    
    appRoutes = appRoutesNames;
    mainRoutes = mainRoutesNames;

    constructor(){   
    }

    protected setPageTitle(title){
        EventEmitterService.get(MainHeaderNotifications.SET_TITLE).emit(title);
    }

    protected setPageMetaTags(metatags: { tags: MetaDefinition[], forceCreation?: boolean}){
        let payload = {
            tags: metatags.tags,
            forceCreation: metatags.forceCreation
        }
        EventEmitterService.get(MainHeaderNotifications.SET_META_TAGS).emit(payload);
    }
}
