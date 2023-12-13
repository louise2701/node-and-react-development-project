import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy{
  title = 'td_angular';
  values: string ='';
  constructor() {
    console.log('AppComponent.constructor()')
  }
  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()')
  }
  ngOnDestroy(): void {
    console.log('AppComponent.ngOnDestroy()')
  }
}

export interface LessonPackage {
  title: string;
  description: string;
  category: string;
  level: number;
  prerequisite: string[];
  tags: string[];
  copyright: string;
}