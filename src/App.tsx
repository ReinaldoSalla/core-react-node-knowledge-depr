import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './App.styles';
import Universal from './pages/Universal';

const App = () => (
	<BrowserRouter>
		<GlobalStyle />
		<Universal />  
	</BrowserRouter>
);

export default App;

// import * as React from 'react';

// interface State {
//   count: number;
// }

// type Action  =
//   | { type: 'reset' }
//   | { type: 'increment' }
//   | { type: 'decrement' };

// const initialState: State = {
//   count: 0,
// };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case 'reset':
//       return initialState;
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [state, dispatch] = React.useReducer(reducer, {
//     count: 0,
//   });
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//     </>
//   );
// }

// export default Counter;