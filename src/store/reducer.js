import  {combineReducers} from 'redux-immutable'
import { reducer as recommendReducer } from 'pages/discover/c-pages/recommend/store/reducer';
const Creducer = combineReducers({
    recommend:recommendReducer
})
export default Creducer