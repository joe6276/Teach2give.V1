import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.css'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, RouterModule]
})
export class NavigationComponent {
    // ICONS
    rightIcon: IconDefinition = faCaretRight;
}