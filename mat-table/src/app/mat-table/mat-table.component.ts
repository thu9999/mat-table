import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LessonDataSource } from './data/lesson-data-source';
import { CourseService } from './services/course.service';

@Component({
    selector: 'app-mat-table',
    templateUrl: './mat-table.component.html',
    styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
    dataSource: LessonDataSource;
    displayedColumns = [ 'seqNo', 'description', 'duration' ];
    loading$: Observable<boolean>;
    constructor( private courseService: CourseService ) { }

    ngOnInit(): void {
        this.dataSource = new LessonDataSource( this.courseService );
        this.loading$ = this.dataSource.getLoadingAsObservable();
        this.dataSource.loadData( 1 );
    }

    addLessons(): void {
        this.dataSource.addData();
    }

}
