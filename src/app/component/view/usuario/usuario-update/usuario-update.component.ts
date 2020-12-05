import { UsuarioNivel } from './../usuario-nivel.model';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { UsuarioService } from 'src/app/component/service/usuario.service';


@Component({
  selector: 'app-usuario-update',
  templateUrl: './../usuario-form/usuario-form.component.html',
  styleUrls: ['./../usuario-form/usuario-form.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  isLoadingResults = false;

  usuario: Usuario;
  
  niveis : UsuarioNivel[] = [
    {id: 1, desc: "ADMIN"},
    {id: 2, desc: "GESTOR"},
    {id: 3, desc: "COMUM"}
  ]
  
  tituloPagina = "Alterar Dados do Usuário";

  hide = true;

  constructor(private servico: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.servico.readById(id).subscribe(usuario => {

      this.usuario = usuario;
      let newDate: moment.Moment = moment.utc(this.usuario.dtNascimento);
      this.usuario.dtNascimento = newDate.format("YYYY-MM-DD")+"T00:00:00"
    })
  }

  salvarUsuario(): void {
    this.isLoadingResults = true;
    this.servico.update(this.usuario).subscribe(() => {
      this.servico.showMessage("Usuario alterada com sucesso");
      this.isLoadingResults = false;
      this.router.navigate(['/usuarios'])
    },

    err =>{
      this.isLoadingResults = false;
      this.servico.showMessage("Não foi possível alterar este usuário", true);
    });
  }
  
}
