  import * as actionTypes  from './constants'
  import {Map,} from 'immutable';
  const data =Map({
    topBanners: [],
    hotRecommends:[],
    newAlbums:[]
  })
  function reducer(state=data,action){
    switch(action.type){
      case actionTypes.CHANGE_TOP_BANNERS :
        return state.set('topBanners',action.topBanners)
      case actionTypes.CHANGE_HOT_RECOMMEND:
        return state.set('hotRecommends',action.hotRecommend)
      case actionTypes.CHANGE_NEW_ALBUM:
        return state.set('newAlbums',action.newAlbums)
        default:
        return state
    }
    
  }
  export {reducer }