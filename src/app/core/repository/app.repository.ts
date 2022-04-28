import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AppRepository {
    constructor(private httpClient: HttpClient) {}

    auth_token_xscores = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsib2F1dGgyX3hzY29yZXNfYXBwbGljYXRpb24iXSwidXNlcl9uYW1lIjoic2liZXJzIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY1MTUxMTM5MCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DT01QQVQiLCJST0xFX1BSSVZJTEVHRUQiLCJST0xFX0FETUlOIl0sImp0aSI6IjRmNDU3YzhkLWI0ODUtNGMzMS05ZDg0LTFhM2FmNTk5ZDE3NyIsImNsaWVudF9pZCI6InhzY29yZXMtYXBwIn0.RY7ODhUMcLZpR-1jB-1Uy8a0_liODLwH8-ROftbrVLs'

    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth_token_xscores}`}),
    }


    public latestResultsVPG() {
        return this.httpClient.get<any>(environment.latestResultsVpg).pipe();
    }

    public tableLiga1() {
        return this.httpClient.get<any>(environment.tableLiga1, {headers: this.httpOptions.headers}).pipe();
    }

    public tableVpgLiga1() {
        return this.httpClient.get<any>(environment.tableVpgLiga1).pipe();
    }
}