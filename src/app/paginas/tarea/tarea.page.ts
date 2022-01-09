import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TareasService } from 'src/app/tareas.service';
import { Tarea } from './tarea.interface';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
})
export class TareaPage implements OnInit {
  ngForm: FormGroup;
  selectedTask: Tarea | undefined = undefined;
  tasks$ = this.tareaService
    .obtenerTareas()
    .pipe(map((tasks) => tasks.filter((x) => !x.completed)));

  constructor(private fb: FormBuilder, private tareaService: TareasService) {
    this.ngForm = this.fb.group({
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500),
        ],
      ],
    });
  }

  get description() {
    return this.ngForm.get('description');
  }

  get descriptionLength() {
    return this.description?.value?.length;
  }

  ngOnInit() {}

  onSubmit() {
    if (this.ngForm.valid) {
      const { description } = this.ngForm.value;

      if (this.selectedTask) {
        // es para editar
        this.tareaService.actualizarTarea(this.selectedTask.id, {
          description,
        });
        this.selectedTask = undefined;
      } else {
        this.tareaService.crearTarea({
          description,
          createdAt: new Date().toISOString(),
        });
      }

      this.ngForm.reset();
    }
  }

  onDelete(id: string) {
    console.log(id);
    this.tareaService.eliminarTarea(id);
  }

  onCompletedTask(id: string) {
    this.tareaService.actualizarTarea(id, { completed: true });
  }

  setSelectedTask(task: Tarea) {
    this.selectedTask = task;
    this.ngForm.setValue({ description: task.description });
  }

  unSelectTask() {
    this.selectedTask = undefined;
    this.ngForm.reset();
  }
}
