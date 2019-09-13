import { Injectable } from '@angular/core';
import { movie } from 'src/app/lfs-data/lfs-data-model';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CommonService } from 'src/app/lfs-services/common.service';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomePageResolverService implements Resolve<any> {

  constructor(private service: CommonService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getMovies().pipe(
      take(1),
      mergeMap(data => {
        if(data) {
          return of(data);
        }
        else {
          return EMPTY;
        }
      })
    );
  }
}
