import { QuestionService } from './../_services/question.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../_models/quiz-detail/quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  testId = 1;
  quizs: Quiz[];
  public name: String;
  public catalogy: String;
  public chapter: String;
  public language: String;

  constructor(
    private router: Router,
    private questionService: QuestionService
  ) { 
    this.quizs = [];
    this.name = '';
    this.catalogy = '';
    this.chapter = '';
    this.language = '';
  }

  ngOnInit() {
    this.questionService.getAllQuizDetail().subscribe(quizs => this.quizs = quizs);
  }
  onGetQuiz(i: number): void {
    this.testId = i + 1;
  }
  onConfirm() {
    this.router.navigate(['/testing', this.testId]);
  }
}
