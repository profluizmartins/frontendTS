import { UsuarioNivel } from './../component/view/usuario/usuario-nivel.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getNivel'
})
export class GetNivelPipe implements PipeTransform {

  niveis : UsuarioNivel[] = [
    {id: 1, desc: "Administrador"},
    {id: 2, desc: "Gestor"},
    {id: 3, desc: "Comum"}
  ]

  transform(id: number): string {
    
    for(let nivel of this.niveis ){
      if(nivel.id == id){
        return nivel.desc;
      }
    }

    return "--";
  }

}
