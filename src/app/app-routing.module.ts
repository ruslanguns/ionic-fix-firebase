import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./paginas/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'lista',
    loadChildren: () =>
      import('./paginas/lista/lista.module').then((m) => m.ListaPageModule),
  },
  {
    path: 'datos',
    loadChildren: () =>
      import('./paginas/datos/datos.module').then((m) => m.DatosPageModule),
  },
  {
    path: 'datos-form',
    loadChildren: () =>
      import('./paginas/datos-form/datos-form.module').then(
        (m) => m.DatosFormPageModule
      ),
  },
  {
    path: 'mapa',
    loadChildren: () =>
      import('./paginas/mapa/mapa.module').then((m) => m.MapaPageModule),
  },
  {
    path: 'camara',
    loadChildren: () =>
      import('./paginas/camara/camara.module').then((m) => m.CamaraPageModule),
  },
  {
    path: 'fab',
    loadChildren: () =>
      import('./paginas/fab/fab.module').then((m) => m.FabPageModule),
  },
  {
    path: 'refresher',
    loadChildren: () =>
      import('./paginas/refresher/refresher.module').then(
        (m) => m.RefresherPageModule
      ),
  },
  {
    path: 'fetch',
    loadChildren: () =>
      import('./paginas/fetch/fetch.module').then((m) => m.FetchPageModule),
  },
  {
    path: 'tarea',
    loadChildren: () =>
      import('./paginas/tarea/tarea.module').then((m) => m.TareaPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
