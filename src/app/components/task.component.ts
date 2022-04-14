import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  template: `
  <!-- TASK_INBOX list-item -->
   <div class="list-item {{ task?.state }}">
     <label class="checkbox">
       <input
         type="checkbox"
         [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
         name="checked"
       />
       <span class="checkbox-custom" (click)="onArchive(task.id)" attr.aria-label="archiveTask-{{ task?.id }}"></span>
     </label>
     <div class="title">
       <input
         type="text"
         [value]="task?.title"
         readonly="true"
         placeholder="Input title"
         style="background: pink;"
       />
     </div>
     <div class="actions">
       <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
         <span class="icon-star" attr.aria-label="pinTask-{{ task?.id }}"></span>
       </a>
     </div>
   </div>
  `,
})
export class TaskComponent {
  @Input() task: Task;

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  onPin(id:any){  //用在上面html
    this.onPinTask.emit(id);
    console.log('pin!');
  }

  onArchive(id:any){
    this.onArchiveTask.emit(id);
    console.log('check!');
  }
}
