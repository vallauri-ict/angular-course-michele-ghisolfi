import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  @Input() student:any;
  @Output() studentDeleteEvent = new EventEmitter<any>()

  constructor() {  }

  private randomStudentPro() {
    let num = Math.floor(Math.random() * 2)
    this.student.isPro = (num==1);
  }

  ngOnInit(): void {
    this.randomStudentPro()
  }

  onStudentClick() {
    this.student.isPro = !this.student.isPro;
  }

  onDeleteStudent() {
    this.studentDeleteEvent.emit(this.student)
  }
}
