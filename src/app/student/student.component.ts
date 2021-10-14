import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Luca Pelissero', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Bianca Teleman', hobby: 'Volley', gender: 'F', isPro: true },
    { name: 'Paolo Giordano', hobby: 'Volley', gender: 'M', isPro: true },
    { name: 'Giada Valinotto', hobby: 'Paddle', gender: 'F', isPro: false },
    { name: 'Marta Baudracco', hobby: 'Volley', gender: 'F', isPro: true },
    { name: 'Gabriele Leone', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Martina Velardi', hobby: 'Karate', gender: 'F', isPro: false},
    { name: 'Michele Ghisolfi', hobby: 'Karate', gender: 'M', isPro: true},
    { name: 'Paolo Racca', hobby: 'Volley', gender: 'M', isPro: true},
    { name: 'Ivan Anjelovski', hobby: 'Karate', gender: 'M', isPro: false},

  ]

  student: any

  constructor() {
    this.randomStudent()
  }

  private randomStudent() {
    let num = Math.floor(Math.random()*this.studentList.length)
    this.student = this.studentList[num]
  }

  ngOnInit(): void {
  }

  onStudentClick() {
    this.randomStudent()
  }
}
