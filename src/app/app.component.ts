import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  // courses$: Observable<any[]>;
  // authors$;
  // coursesKey$;
  // courseRef: AngularFireList<any>;

  // constructor(private db: AngularFireDatabase ) {
    // this.courseRef = db.list('Courses');
    // this.coursesKey$ = this.courseRef.snapshotChanges()
    //   .pipe(
    //     map(changes =>
    //       changes.map(c => ({ key: c.payload.key, value: c.payload.val() }))
    //     )
    //   );
    // this.courses$ = this.courseRef.valueChanges();
    // this.authors$ = db.list('/Authors').valueChanges();
  // }

  // add(course: HTMLInputElement) {
  //   this.courseRef.push(course.value);
  //   course.value = '';
  // }

  // update(key: string, value: string ) {
  //   this.courseRef.update(key, {Value: value + ' UPDATED'});
  // }

  // deleteItem(key: string) {
  //   this.courseRef.remove(key);
  // }
}
