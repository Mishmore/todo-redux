import * as todoActions from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('salvar el mundo');
const todo2 = new Todo('salvar el día');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: todoActions.Actions): Todo[] {
  switch (action.type) {

    case todoActions.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    case todoActions.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          }
        } else {
          return todoEdit;
        }
      })

    case todoActions.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        }
      })

    case todoActions.EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          }
        } else {
          return todoEdit;
        }
      })

    case todoActions.BORRAR_TODO:
      return state.filter(todo => todo.id !== action.id);

    case todoActions.BORRAR_ALL_TODO:
      return state.filter(todo => !todo.completado);

    default:
      return state;
  }
}
