import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[para]'
})
export class ParaDirective implements OnInit {

  @Input("paraCada") strs: string[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
   
    for (let str of this.strs) {
      this.container.createEmbeddedView(
        this.template, { $implicit : str + " - GO - " + str.length}
      )
    }
  }


}
