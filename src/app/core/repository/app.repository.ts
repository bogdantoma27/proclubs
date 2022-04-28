import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AppRepository {
    constructor(private httpClient: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json',}),
    }

    public latestResultsVPG() {
        return this.httpClient.get<any>(environment.latestResultsVpg).pipe();
    }
}