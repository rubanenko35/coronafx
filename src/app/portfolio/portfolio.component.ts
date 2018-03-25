import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { AppService } from '../app-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  private url: SafeResourceUrl;
  public show: boolean = true;
  description = '';

  constructor(private renderer: Renderer2,
              private appService: AppService,
              private sanitizer: DomSanitizer){}


  mediaDownload(_id:string, item) {
    this.description = item['vimeoData']['description'] || '';
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + _id + '?autoplay=1&title=0&byline=0&portrait=0');
    this.show = false;
  }

  hideVideo(){
    this.show = true;
  }


  get items(){
    return this.appService.filteredData;
  }

  onImageLoad(imgEl, textEl){
    this.renderer.setStyle(imgEl, 'opacity', '1');
    this.renderer.setStyle(textEl, 'opacity', '1');

  }



}
