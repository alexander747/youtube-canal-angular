import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'videoYoutube'
})
export class UnsafePipe implements PipeTransform {

  constructor( private dom:DomSanitizer ){}

  transform(value: string): any {
    let urlYoutube = "https://www.youtube.com/embed/";

    return this.dom.bypassSecurityTrustResourceUrl( urlYoutube +value );
  }

}
