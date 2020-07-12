import { Component } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

/**NOTIFICATIONS */
import { MainHeaderNotifications } from './notifications/main-header.notifications';

/**MODELS */
import { DropdownOptions } from './../dropdown/models/dropdown-options.model';

/**SERVICES */
import { EventEmitterService } from '@shared/services/emitter/event-emitter.service';

@Component({
  selector: 'main-header',
  templateUrl: 'main-header.component.html',
  styleUrls: ['main-header.component.scss']
})
export class MainHeaderComponent {

  protected pageTitle: string;
  private subscriptions = new Subscription();

  headerDropdown: DropdownOptions;

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {    
    this.subscriptions.add(EventEmitterService.get(MainHeaderNotifications.SET_TITLE).subscribe(title => this.setPageTitle(title)));
    this.subscriptions.add(EventEmitterService.get(MainHeaderNotifications.SET_META_TAGS).subscribe(payload => this.setPageMetatags(payload)));

    this.setHeaderDropdown();
  }
  
  private setPageTitle(title){
    this.pageTitle = title;
    this.titleService.setTitle(title);
  }
  
  private setPageMetatags(metatags: { tags: MetaDefinition[], forceCreation?: boolean}){
    this.metaService.addTags(metatags.tags, metatags.forceCreation);
  }

  private setHeaderDropdown(){
    this.headerDropdown = new DropdownOptions({
      header: 'Settings',
      icon: 'more_vert',
      menu: [
        {
          icon: 'person',
          label: 'My Profile',
        },
        {
          icon: 'exit_to_app',
          label: 'Sign Out',
        }
      ]
    });
  }
  
}
