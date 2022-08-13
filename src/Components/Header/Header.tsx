import React, { Component } from 'react'

import { connect } from 'react-redux'

import { StateType } from '../../Redux/store'

import { Dispatch } from 'redux'
import { ThemeActions } from '../../Redux/features/theme/_themeActions';
import {toggleTheme} from '../../Redux/features/theme/themeActionCreators';

type HeaderProps = {
  isDarkMode  : boolean;
  toggleTheme : () => void;
}


export class Header extends Component<HeaderProps> {
  
  render() {
    
    const toMode = this.props.isDarkMode? 'Dark' : 'Light'
    
    return (
      <header className="header">
        <div className='header__text'>Where in the world?</div>
        <div className='header__dark-mode-container'>
          <p onClick={this.props.toggleTheme}>Theme: {toMode}</p>
        </div>
      </header>
    )
  }
  
}


const mapStateToProps = (state: StateType) => ({
  isDarkMode: state.theme.isDarkMode,
})

const mapDispatchToProps = (dispatch: Dispatch<ThemeActions>) => ({
  toggleTheme: () => {dispatch(toggleTheme())},
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)