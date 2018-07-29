import React from 'react'

import Icon from '../../components/Icon/Icon'

require('./styleHeader.scss')

const Header = ({...props}) => {
  return (
    <header className={'header'}>
      <h1 className={'h1'}>Rob Sawyer</h1>
      <h4 className={'h4 header__h4'}>in Los Angeles, California <span className={'h3 header__h3 header__emoji'}>🌴</span></h4>
      <h3 className={'h3 header__h3'}>
        <div className={'header__sub'}>freelance technology consultant and engineer</div>
      </h3>
      <div className={'header__social'}>
        <a className={'header__social-item'} target='_blank' href='https://www.linkedin.com/in/robksawyer'>
          <Icon image={'linkedin'} />
        </a>
        <a className={'header__social-item'} target='_blank' href='https://instagram.com/robksawyer'>
          <Icon image={'instagram'} />
        </a>
        <a className={'header__social-item'} target='_blank' href='https://github.com/robksawyer'>
          <Icon image={'github'} />
        </a>
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
