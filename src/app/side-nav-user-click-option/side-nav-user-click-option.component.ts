import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-user-click-option',
  templateUrl: './side-nav-user-click-option.component.html',
  styleUrls: ['./side-nav-user-click-option.component.scss']
})
export class SideNavUserClickOptionComponent {
  showDropdown: string | null = null;

  toggleDropdown(item: string): void {
    if (this.showDropdown === item) {
      this.showDropdown = null;
    } else {
      this.showDropdown = item;
    }
  }

}
