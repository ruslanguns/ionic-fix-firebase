import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Tarea } from './paginas/tarea/tarea.interface';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  constructor(private firestore: AngularFirestore) {}

  private get collection() {
    return this.firestore.collection<Tarea>('tareas');
  }

  obtenerTareas() {
    return this.collection.snapshotChanges().pipe(
      map((docs) =>
        docs.map(({ payload: { doc } }) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    );
  }

  async crearTarea(tarea: Tarea) {
    return await this.collection
      .add({ ...tarea, completed: false })
      .catch((error) => console.error(error));
  }

  async actualizarTarea(id: string, tarea: Partial<Tarea>) {
    return await this.collection.doc(id).update(tarea);
  }

  async eliminarTarea(id: string) {
    return await this.collection.doc(id).delete();
  }
}
