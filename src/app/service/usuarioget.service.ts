import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariogetService {

  constructor(private http: HttpClient) { }

  getAllUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios')
  }

  postUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios', usuario)
  }
}
