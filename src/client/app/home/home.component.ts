import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName = '';
  errorMessage: string;
  names: any[] = [];

  images: Image[] = [
    new Image(0, {
      img: '../../assets/images/gallery/img1.jpg',
      extUrl: 'http://www.google.com'
    }),
    new Image(1, {
      img: '../../assets/images/gallery/img2.jpg',
      description: 'Description 2'
    }),
    new Image(
      2,
      {
        img: '../../assets/images/gallery/img3.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      },
      {
        img: '../../assets/images/gallery/thumbs/img3.png',
        title: 'custom title 2',
        alt: 'custom alt 2',
        ariaLabel: 'arial label 2'
      }
    ),
    new Image(3, {
      img: '../../assets/images/gallery/img4.jpg',
      description: 'Description 4',
      extUrl: 'http://www.google.com'
    }),
    new Image(4, { img: '../../assets/images/gallery/img5.jpg' }, { img: '../assets/images/gallery/thumbs/img5.jpg' })
  ];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
