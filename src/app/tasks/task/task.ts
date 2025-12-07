import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskObj } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {
 @Input({required: true}) taskObj!: TaskObj
 @Output() taskCompleted = new EventEmitter<string>();
 compleate(){
    this.taskCompleted.emit(this.taskObj.id);
 }
}
