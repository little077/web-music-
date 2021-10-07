import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import HYThemeHeaderRCM from 'components/theme-header-rcm'
   
import  {getHotRecommendAction} from '../../store/actionCreators'
import HYSongsCover from 'components/songs-cover'

import {
  HotRecommendWrapper
} from './style';

export default memo(function HYHotRecommend() {
  // state
  
  // redux hooks
    const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);
  const dispatch = useDispatch()
  // other hooks
  useEffect(()=>{
    dispatch( getHotRecommendAction(8))
 },[dispatch])

  return (
    <HotRecommendWrapper >
     <HYThemeHeaderRCM title='热门推荐' keywords={['华语','流行','摇滚','民谣','电子']}></HYThemeHeaderRCM>
     <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <HYSongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
