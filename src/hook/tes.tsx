import React, { useReducer } from 'react';

// Definição dos tipos de estado e ações
type State = {
  count: number;
};

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' };

// Definindo o reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

// Componente React
const Counter: React.FC = () => {
  // Definindo o estado inicial e o dispatch
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
    </div>
  );
}; 

export default Counter;