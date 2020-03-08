import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { accountCotohaInfo } from '../../environments/environment';
import { CotohaToken } from '../interfaces/cotoha';
import { map } from 'rxjs/operators';
import { importType } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class CotohaAuthService {
  public tokenInfo: CotohaToken;
  private header: any = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private body: any = {
    grantType: 'client_credentials',
    clientId: accountCotohaInfo.clientId,
    clientSecret: accountCotohaInfo.clientSecret
  };

  constructor(public http: HttpClient) { }

  fetchAccessToken() {
    return this.http.post(accountCotohaInfo.accessTokenUrl, this.body, this.header);
  }
}
