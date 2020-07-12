import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { mainRoutesNames } from '@pages/main/main-routes-names';

/**MODELS */
import { DropdownOptions } from './models/dropdown-options.model';

@Component({
  selector: 'dropdown-menu',
  templateUrl: 'dropdown-menu.component.html',
  styleUrls: ['dropdown-menu.component.scss']
})
export class DropdownMenuComponent {

  private mainRoutes = mainRoutesNames;
  protected identifier = Math.random();
  @Input() options: DropdownOptions;

  @Output() itemEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {    
  }

  setDropdown(dropdown: DropdownOptions){
    this.options = dropdown;
  }

  protected onClick(item){
    
    this.itemEmitter.emit(item.payload);
    
    if(item.route){
      this.router.navigate([`/${this.mainRoutes[item.route].route}`]);
    }
  }
  
}
