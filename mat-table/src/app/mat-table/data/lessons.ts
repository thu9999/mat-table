export class Lesson {
    seqNo: number;
    description: string;
    duration: string;

    constructor( seqNo: number, description: string, duration: string ) {
        this.seqNo = seqNo;
        this.description = description;
        this.duration = duration;
    }
}

export const LessonList: Lesson[] = [
    new Lesson( 1, 'Angular Tutorial For Beginners', '4:17' ),
    new Lesson( 2, 'Building Your First Component', '2:17' ),
    new Lesson( 3, 'Component @Input', '2:33')
]

export const NewLessonList: Lesson[] = [
    new Lesson( 4, 'Angular Tutorial For Beginners', '4:17' ),
    new Lesson( 5, 'Building Your First Component', '2:17' ),
    new Lesson( 6, 'Component @Input', '2:33')
]