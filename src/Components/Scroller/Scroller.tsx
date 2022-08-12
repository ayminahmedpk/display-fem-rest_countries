import React, { Component } from 'react'
import { PropsWithChildren } from 'react'


// type ScrollerProps = {
//   children : React.ReactNode;
// }

type ScrollerState = {
  itemsDisplayed: number;
}

export default class Scroller extends Component<PropsWithChildren, ScrollerState> {
  
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = {
       itemsDisplayed: 0,
    }
  }


  // componentDidMount() {
  //   const pageHeight      = document.documentElement.scrollHeight;
  //   const currentPosition = document.documentElement.scrollTop;
  //   const windowHeight    = document.documentElement.clientHeight;
  //   console.log(windowHeight, pageHeight, currentPosition);
  // }


  componentDidUpdate() {
    const pageHeight      = document.documentElement.scrollHeight;
    const currentPosition = document.documentElement.scrollTop;
    const windowHeight    = document.documentElement.clientHeight;
    console.log(windowHeight, pageHeight, currentPosition);
  }

  render() {

    const isScrolledToBottom = () => {
      const pageHeight      = document.documentElement.scrollHeight;
      const currentPosition = document.documentElement.scrollTop;
      const windowHeight    = document.documentElement.clientHeight;

      console.log(windowHeight, pageHeight, currentPosition);
      if (currentPosition > pageHeight - (windowHeight * 1.5)) { return true; }
      else { return false; }
    }

    document.addEventListener('scroll', () => {
      console.log('Are we at the end? : ', isScrolledToBottom())
    });

    // document.addEventListener('scroll', () => {console.log(window.screenX)});
    // const childrenArray = React.Children.toArray(this.props.children);
    // console.log(childrenArray.length);
    return (
      <div className='scroller'>
        <div className="country-card__container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
