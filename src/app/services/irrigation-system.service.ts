import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../constants';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IrrigationSystemService {
  constructor(private http: HttpClient) {}

  getPlots() {
    const url = `${environment.baseURL}${constants.API.GET_PLOTS_API}`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }
}
