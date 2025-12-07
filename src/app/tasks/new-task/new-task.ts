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
  @Output() closeTask = new EventEmitter<void>();
  @Output() TaskAdded = new EventEmitter<any>();

  addNewTask(task:NgForm){
   if(task.valid){
    this.TaskAdded.emit(task.value);
     task.reset();
    this.closeTask.emit();
   }
    else{
      task.form.markAllAsTouched();
    }
  }
  cancel(){
    this.closeTask.emit();
  }
}
