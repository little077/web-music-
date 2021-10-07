import React from 'react'
 import Discover from 'pages/discover'
 import HYAlbum from 'pages/discover/c-pages/album'
 import HYArtist from 'pages/discover/c-pages/artist'
 import HYDjradio from 'pages/discover/c-pages/djradio'
 import HYRanking from 'pages/discover/c-pages/ranking'
 import  HYSongs from 'pages/discover/c-pages/songs'
 import  HYRecommend from 'pages/discover/c-pages/recommend'
 import HYPlayer from 'pages/discover/c-pages/player'
 import HYMine from 'pages/mine'
 import HYFriend from 'pages/friend'
import { Redirect } from 'react-router'
 
 const routes =[
  {
    path:'/',
    exact:true,
    render:()=>(
      <Redirect to='/discover'/>
    )
  },
  {
    path:'/discover',
    component:Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: HYRecommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
      {
        path: "/discover/songs",
        component: HYSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HYDjradio
      },
      {
        path: "/discover/artist",
        component: HYArtist
      },
      {
        path: "/discover/album",
        component: HYAlbum
      },
      {
        path: "/discover/player",
        component: HYPlayer
      }
    ]
  },
  {
    path:'/mine',
    component:HYMine
  },
  {
    path:'/friend',
    component:HYFriend
  }
]
export default routes