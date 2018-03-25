import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChild('navigation')navigation: ElementRef;
  @ViewChild('main')main: ElementRef;
  @ViewChild('portfolio')portfolio: ElementRef;


  public items = [
    {
      name: 'All',
      link: 'all'
    },
    {
      name: 'Color Correction',
      link: 'color-correction'
    },
    {
      name: 'Compositing',
      link: 'compositing'
    },
    {
      name: 'Animation',
      link: 'animation'
    },
    {
      name: 'Camera Tracking',
      link: 'camera-tracking'
    },
    {
      name: 'Keying/Rotoscoping',
      link: 'keying-rotoscoping'
    },
    {
      name: 'Motion Graphics',
      link: 'motion-graphics'
    },
    {
      name: 'VR',
      link: 'vr'
    }
  ]

  constructor(private renderer: Renderer2,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }


}
