import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Lesson, LessonList, NewLessonList } from '../data/lessons';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    lessonList = LessonList;
    newLessonList = NewLessonList;
    constructor( private http: HttpClient ) { }

    findLessons( courseId: number, filter: string = '', 
                 sortOrder: string = 'asc', pageNumber: number = 0,
                 pageSize: number = 3 ): Observable<Lesson[]> {
        return of( this.lessonList ).pipe( delay( 3000 ) );
    }

    addLessons(): Observable<Lesson[]> {
        return of( this.newLessonList ).pipe( delay( 1000 ) );
    }
}
