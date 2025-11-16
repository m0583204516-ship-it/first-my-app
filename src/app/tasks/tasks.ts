import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../tasks/task/task';
import {fakeTasks} from './task/fake_tasks'
import {NewTask} from './new-task/new-task'

@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  tasks = fakeTasks;
  @Input() name :string= '';
  @Input() userId :string= '';
  addTask = false;
  get userSelectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
  changeAddTask(){
    this.addTask = true;
  }
}
