import * as filterActions from './filter.actions';

const estadoInicial: filterActions.filtrosValidos = 'todos';

export function filtroReducer(state = estadoInicial,
  action: filterActions.actions): filterActions.filtrosValidos {
  switch (action.type) {
    case filterActions.SET_FILTRO:
      return action.filtro;

    default:
      return state;
  }
}
