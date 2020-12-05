import { UsuarioNivel } from './../usuario-nivel.model';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/component/service/usuario.service';



@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario : Usuario = {
    nomeUsuario: "",
    login: "",
    dtNascimento: "",
    senha: "",
    nivel: 0,
  }

  niveis : UsuarioNivel[] = [
    {id: 1, desc: "ADMIN"},
    {id: 2, desc: "GESTOR"},
    {id: 3, desc: "COMUM"}
  ]

  tituloPagina = "Cadastar Novo Usuário";

  hide = true;

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarUsuario(): void{
    let newDate: moment.Moment = moment.utc(this.usuario.dtNascimento).local();
    this.usuario.dtNascimento = newDate.format("YYYY-MM-DD")+"T00:00:00"
    

    this.service.create(this.usuario).subscribe(() => {
      this.service.showMessage("Usuário salvo com sucesso");
      this.router.navigate(['/usuarios']);
    },
    err => this.service.showMessage("Ocorreu algum erro!!" , true) 
    );
  }



}
