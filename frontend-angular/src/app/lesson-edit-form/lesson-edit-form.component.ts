import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})
export class LessonEditFormComponent {
  lessonForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.lessonForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [''],
      level: [''],
      prerequisite: [''],
      tags: [''],
      copyright: ['']
    });
  }
  
  onClickSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
    }
    else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }
}