import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as filterActions from '../../filter/filter.actions';
import * as todoActions from '../todo.actions';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;
  filtrosValidos: filterActions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: filterActions.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });

  }

  cambiarFiltro(nuevoFiltro: filterActions.filtrosValidos) {
    const accion = new filterActions.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  borrarTodo() {
    const accion = new todoActions.BorrarAllTodoAction();
    this.store.dispatch(accion);
  }

}
