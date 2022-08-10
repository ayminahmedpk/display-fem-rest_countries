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
    
    const mode = this.props.isDarkMode? '[x]' : '[ ]'
    
    return (
      <>
      <div>Where in the world</div>
      <button onClick={this.props.toggleTheme}>{mode} Dark Mode</button>
      <br />
      </>
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