import { CommonModule } from "@angular/common";
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// IMPORT ICONS
import { IconDefinition, faLinkedinIn, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faThumbTack, faWalking, faCircleDot, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from "../footer/footer.component";


@Component({
    selector: 'about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, NavigationComponent, FooterComponent]
})
export class AboutComponent {
    // ICONS
    // Social Media
    linkedInIcon: IconDefinition = faLinkedinIn;
    instagramIcon: IconDefinition = faInstagram;
    googleIcon: IconDefinition = faGoogle;
    // Regular
    clockIcon: IconDefinition = faClock;
    thumbTackIcon: IconDefinition = faThumbTack;
    plusIcon: IconDefinition = faPlus;
    stepIcon: IconDefinition = faWalking;
    bulletIcon: IconDefinition = faCircleDot;

    // SELECT ALL SLIDER NAVIGATION BUTTONS
    @ViewChildren('sliderButton', { read: ElementRef }) sliderButtons!: QueryList<ElementRef>;
    @ViewChildren('slide', { read: ElementRef }) slides!: QueryList<ElementRef>;
    @ViewChildren('content', { read: ElementRef }) content!: QueryList<ElementRef>;
    @ViewChild('video', { read: ElementRef }) video!: ElementRef;
    @ViewChild('videoPlayer', { read: ElementRef }) videoPlayer!: ElementRef;
    

    ngAfterViewInit(): void {
        this.sliderButtons.forEach((elementRef: ElementRef, index: number) => {
            const element = elementRef.nativeElement;
            element.addEventListener('click', () => {
                this.NAVIGATE(index);

                // ADD active CLASS TO THE FIRST sliderButton
                if (index === 0) {
                    element.classList.add('active');
                }
            });
        });

        this.slides.forEach((elementRef: ElementRef, index: number) => {
            const element = elementRef.nativeElement;
            element.addEventListener('click', () => {
                this.NAVIGATE(index);

                // ADD active CLASS TO THE FIRST sliderButton
                if (index === 0) {
                    element.classList.add('active');
                }
            });
        });

        this.content.forEach((elementRef: ElementRef, index: number) => {
            const element = elementRef.nativeElement;
            element.addEventListener('click', () => {
                this.NAVIGATE(index);

                // ADD active CLASS TO THE FIRST sliderButton
                if (index === 0) {
                    element.classList.add('active');
                }
            });
        });
    }

    NAVIGATE(manual: number) {
        /* SLIDER BUTTONS */
        this.sliderButtons.forEach((elementRef: ElementRef) => {
            elementRef.nativeElement.classList.remove('active');
        });

        // ADD active CLASS TO THE CLICKED sliderButton
        this.sliderButtons.toArray()[manual].nativeElement.classList.add('active');

        /* VIDEO SLIDES */
        this.slides.forEach((elementRef: ElementRef) => {
            elementRef.nativeElement.classList.remove('active');
        });

        // ADD active CLASS TO THE CLICKED sliderButton
        this.slides.toArray()[manual].nativeElement.classList.add('active');


        /* CONTENT */
        this.content.forEach((elementRef: ElementRef) => {
            elementRef.nativeElement.classList.remove('active');
        });

        // ADD active CLASS TO THE CLICKED sliderButton
        this.content.toArray()[manual].nativeElement.classList.add('active');
    }

    /* VIDEO CONTROLS */
    playVideo(VIDEO_URL: string): void {
        this.video.nativeElement.src = VIDEO_URL;
        this.videoPlayer.nativeElement.style.display = "block";
    }
    stopVideo(): void {
        this.videoPlayer.nativeElement.style.display = "none";
    }
   
}

