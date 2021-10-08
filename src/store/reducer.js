import  {combineReducers} from 'redux-immutable'
import { reducer as recommendReducer } from 'pages/discover/c-pages/recommend/store/reducer';
import { reducer as playerReducer } from '../pages/player/store';
const Creducer = combineReducers({
    recommend:recommendReducer,
    player: playerReducer
 
})
export default Creducer