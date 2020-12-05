import { AtenticacaoService } from './../../service/atenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../view/usuario/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    nomeUsuario: "",
    login: "",
    dtNascimento: "",
    senha: "",
    nivel: 0,
  }


  constructor(
    private servico: AtenticacaoService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.servico.login(this.usuario).subscribe(usuario => {
      console.log(usuario);
      if(usuario.idUsuario > 0){
        window.localStorage.setItem('token', usuario.idUsuario.toString()+usuario.login);
        window.localStorage.setItem('nome', usuario.nomeUsuario);
        window.localStorage.setItem('login', usuario.login);
        this.servico.showMessage(usuario.nomeUsuario+ " seja bem vindo(a)!");
        this.route.navigate(['/']);
      }else{
        this.servico.showMessage("Usuário ou Senha incorreto", true)
      }

     // this.router.navigate(['/usuarios']);
    },
      err => this.servico.showMessage("Erro de comunicação!!", true)
    )

  }

}
