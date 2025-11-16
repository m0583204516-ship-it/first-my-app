import { Component ,Input, Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '../../../../node_modules/@angular/forms/index';


@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  title='title'
  summary='summary'
  date = 12/5/2025
  @Output() dontAddTask = new EventEmitter<string>();
  addNewTask(task:NgForm){
    console.log('summary',this.summary)
    console.log('title',this.title)
    console.log(task)
  }
}
