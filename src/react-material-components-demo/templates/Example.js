/**
 * Created by ruslan on 26.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon,
} from '../lib'
import Highlight from 'react-fast-highlight';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.handleViewCode = this.handleViewCode.bind(this);
  }

  handleViewCode() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    const {isActive} = this.state;
    const {
      children,
      title,
      code,
      className,
      ...otherProps
    } = this.props;
    return (
      <Elevation
        zSpace="2"
        className={`demo-example ${(className)? className : ''}`}
        {...otherProps}
      >
        <Toolbar
          className="toolbar-view_example"
        >
          <ToolbarRow>
            <ToolbarSection start>
              <ToolbarTitle>{title}</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection end>
              <ToolbarIcon
                onClick={() => this.handleViewCode()}
                aria-label="Code" alt="Code"
                className="demo-icon_toggle"
              >code</ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <Elevation
          className="demo-code"
          style={{
            'overflow': 'auto',
            'maxHeight': (isActive) ? '20em' : '0px',
            'transition': 'max-height 800ms ease-in-out 0ms',
          }}
        >
          <Highlight language='javascript'>
            {code}
          </Highlight>
        </Elevation>
        <ToolbarMain
          className="demo-page_demo-components"
        >
          {children}
        </ToolbarMain>
      </Elevation>
    )
  }
}