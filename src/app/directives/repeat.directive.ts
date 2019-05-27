import { Directive, TemplateRef, ElementRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[repeat]'
})
export class RepeatDirective {

    @Input() set repeat(val:number){
        this.vcr.clear();
        for (let index = 0; index < val; index++) {
            this.vcr.createEmbeddedView(this.temp,{},index);
            
        }
    }

    constructor(
        private temp : TemplateRef<any>,
        private elm  : ElementRef,
        private vcr  : ViewContainerRef
    ){}
}