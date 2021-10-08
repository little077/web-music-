import React, { memo} from 'react'
import HYTopBanner from './c-cpns/top-banner/index'
import HYHotRecommend from './c-cpns/hot-recommend'
import  HYNewAlbum from './c-cpns/new-album'
import HYRecomendRanking from './c-cpns/recommend-ranking'
import HYUserLogin from './c-cpns/user-login';
import HYSettleSinger from './c-cpns/settle-singer';
import HYHotAnchor from './c-cpns/hot-anchor';
import {
    RecommendLeft,
    RecommendRight,
    Content,
    RecommendWrapper
} from './style'
export default memo(function HYRecommend() { 
   
    return (
        <RecommendWrapper>
           <HYTopBanner></HYTopBanner>
           <Content className='wrap-v2'>
               <RecommendLeft>
                   <HYHotRecommend/>
                  <HYNewAlbum/>
                  <HYRecomendRanking/>
               </RecommendLeft>
               <RecommendRight>
               <HYUserLogin/>
                <HYSettleSinger/>
              <HYHotAnchor/>
               </RecommendRight>
           </Content>
        </RecommendWrapper>
    )
})
