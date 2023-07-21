import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// IMPORT ICONS
import { IconDefinition, faLinkedinIn, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faThumbTack, faWalking } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, NavigationComponent]
})
export class HomeComponent implements AfterViewInit {
    // ICONS
    // Social Media
    linkedInIcon: IconDefinition = faLinkedinIn;
    instagramIcon: IconDefinition = faInstagram;
    googleIcon: IconDefinition = faGoogle;
    // Regular
    clockIcon: IconDefinition = faClock;
    thumbTackIcon: IconDefinition = faThumbTack;
    stepIcon: IconDefinition = faWalking;

    // SELECT ALL SLIDER NAVIGATION BUTTONS
    @ViewChildren('sliderButton', { read: ElementRef }) sliderButtons!: QueryList<ElementRef>;
    @ViewChildren('slide', { read: ElementRef }) slides!: QueryList<ElementRef>;
    @ViewChildren('content', { read: ElementRef }) content!: QueryList<ElementRef>;

    ngAfterViewInit(): void {
       
    }

}