import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environments';
import { Observable} from 'rxjs';
import { Plantas } from './plantas';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  private apiUrl: string = environment.baseUrl + 'plantas';

  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Plantas[]> {
    return this.http.get<Plantas[]>(this.apiUrl);
  }

}
