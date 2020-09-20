import { CustomDataSource } from 'src/app/core/custom-data-source';
import { Lesson } from '../data/lessons';
import { CourseService } from '../services/course.service';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

export class LessonDataSource extends CustomDataSource<Lesson> {
    constructor( private courseService: CourseService ) {
        super();
    }

    loadData( courseId: number, filter = '',
              sortDirection = 'asc', pageIndex = 0, pageSize = 3 ): void { 
        this.loadingSubject.next( true );
        this.courseService.findLessons( courseId, filter, sortDirection, pageIndex, pageSize ).pipe(
            catchError( () => of( [] ) ),
            finalize( () => this.loadingSubject.next( false ) )
        ).subscribe( lessons => this.dataSubject.next( lessons ) );
    }

    addData(): void {
        this.loadingSubject.next( true );
        this.courseService.addLessons().pipe(
            finalize( () => this.loadingSubject.next( false ) )
        ).subscribe( newLessonList => this.dataSubject.next( newLessonList ) );
    }
}