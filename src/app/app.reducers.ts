import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as todo from './todo/todo.reducer';
import * as filter from './filter/filter.reducer';
import * as filterActions from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filtro: filterActions.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todo.todoReducer,
  filtro: filter.filtroReducer
}
