import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {
  ts = 'test'
  apikey = '11406c849f11ae19df670a42a9b78ef4'
  hash = '86ce4b80219aa5dcb06ecc11310b9b1b'

  constructor(private http: HttpClient) { }

  getCharacters() {
    let url = `http://gateway.marvel.com/v1/public/characters?ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}`
    return this.http.get(url)
  }

  getApiSecurityParameters() {
    return `&ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}`
  }

  getCharacter(id: number) {
    let url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}`
    return this.http.get(url)
  }
}
