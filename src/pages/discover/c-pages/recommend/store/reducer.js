  import * as actionTypes  from './constants'
  import {Map,} from 'immutable';
  const data =Map({
    topBanners: [],
    hotRecommends:[],
  })
  function reducer(state=data,action){
    switch(action.type){
      case actionTypes.CHANGE_TOP_BANNERS :
        return state.set('topBanners',action.topBanners)
      case actionTypes.CHANGE_HOT_RECOMMEND:
        return state.set('hotRecommends',action.hotRecommend)
        default:
        return state
    }
    
  }
  export {reducer }