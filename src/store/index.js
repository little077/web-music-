import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import Creducer from './reducer'

  const store = createStore(Creducer,compose(
      applyMiddleware(...[thunk]),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
export default store