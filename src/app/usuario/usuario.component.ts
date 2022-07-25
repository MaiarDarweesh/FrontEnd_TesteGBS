import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariogetService } from '../service/usuarioget.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario()
  listaUsuario: Usuario[]

  constructor(
    private usuarioService: UsuariogetService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllUsuario()
  }

  findAllUsuario(){
    this.usuarioService.getAllUsuario().subscribe((resp: Usuario[])=> {
      this.listaUsuario = resp
    })
  }

  cadastrar() {
    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
      alert('Usuario cadastrado com sucesso!') // Mensagem pro usuário
      this.findAllUsuario()
      this.usuario = new Usuario // Zera o campo após cadastrar um usuario
      })
    }

    
}
