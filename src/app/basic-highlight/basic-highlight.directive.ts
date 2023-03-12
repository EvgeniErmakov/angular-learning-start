import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[app-basic-high-light]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
