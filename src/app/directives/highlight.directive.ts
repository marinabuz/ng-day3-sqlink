import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
    selector : '[highlight]'
})
export class HighlightDirective implements OnInit{
    
    ngOnInit(): void {
        this.color = this.color || 'yellow';
    }

    @Input('highlight') color:string;

    @HostBinding('style.backgroundColor')
    bg:string;

    @HostListener('mouseover')
    onMouseOver(){
        this.bg = this.color;
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.bg = '';
    }

}
