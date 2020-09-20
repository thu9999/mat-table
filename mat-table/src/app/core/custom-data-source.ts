import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, pairwise, reduce, scan } from 'rxjs/operators';

export abstract class CustomDataSource<T> implements DataSource<T> {
    protected dataSubject = new BehaviorSubject<T[]>( [] );
    protected loadingSubject = new BehaviorSubject<boolean>( false );

    getLoadingAsObservable(): Observable<boolean> {
        return this.loadingSubject.asObservable();
    }

    connect(): Observable<T[]> {
        return this.dataSubject.asObservable().pipe(
            scan( ( acc, cur ) => [...acc, ...cur ], [])
        );
    }

    disconnect(): void { 
        this.dataSubject.complete();
        this.loadingSubject.complete();
    }

    abstract loadData( ...args: any ): void;

    abstract addData( ...args: any ): void;
}