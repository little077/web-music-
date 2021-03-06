import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {HeaderWrapper,HeaderRight,HeaderLeft} from './style'

import {headerLinks} from 'common/local-data'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from "antd";
export default memo(function HYAppHeader() {
    const showSelectItem = (item, index) => {
        if (index < 3) {
          return (
            <NavLink to={item.link}>
              {item.title}
              <i className="sprite_01 icon"></i>
            </NavLink>
          )
        } else {
          return <a href={item.link}>{item.title}</a>
        }
      }
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
          <div className="center" onClick={()=>window.location.href='https://music.163.com/#/login?targetUrl=%2Fcreatorcenter'}>创作者中心</div>
          <div style={{cursor:'pointer'}} onClick={()=>window.location.href='https://music.163.com/#/login?targetUrl=%2Fcreatorcenter'}>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
        </HeaderWrapper>
    )
})
