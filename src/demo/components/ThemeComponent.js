/**
 * Created by ruslan on 11.05.17.
 */
import React from 'react';

import {Theme} from '../../app/index';

export default class ThemeComponent extends React.PureComponent {

    render() {
        return (
            <div >
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

                <h2>Theme colors</h2>
                <fieldset>
                    <legend>Theme colors as text</legend>
                    Primary
                    <Theme
                        primary
                    >
                        <div>
                            Lorem ipsum
                        </div>
                    </Theme>
                    Accent
                    <Theme
                        accent
                    >
                        <div>
                            Lorem ipsum
                        </div>
                    </Theme>
                </fieldset>
                <fieldset>
                    <legend>Theme colors as background</legend>
                    Primary
                    <Theme
                        primaryBg
                    >
                        <div
                            style={{
                                'width': '130px',
                                'height': '50px'
                            }}
                        />
                    </Theme>
                    Accent
                    <Theme
                        accentBg
                    >
                        <div
                            style={{
                                'width': '130px',
                                'height': '50px'
                            }}
                        />
                    </Theme>
                    Background
                    <Theme
                        background
                    >
                        <div
                            style={{
                                'width': '130px',
                                'height': '50px'
                            }}
                        />
                    </Theme>
                </fieldset>
                <h2>Text colors for contrast</h2>
                <fieldset>
                    <legend>Text on background</legend>
                    <Theme
                        style={{
                            'padding': '16px'
                        }}
                        elementType="div"
                        background
                    >
                        <Theme
                            primaryBackground
                        >
                            <span
                            style={{
                            'padding': '5px'
                        }}
                            >primaryBackground</span>
                        </Theme>
                        <Theme
                            secondaryBackground
                        >
                            <span
                            style={{
                            'padding': '5px'
                        }}
                            >secondaryBackground</span>
                        </Theme><Theme
                        hintBackground
                    >
                        <span
                            style={{
                                'padding': '5px'
                            }}
                        >hintBackground</span>
                    </Theme><Theme
                        disabledBackground
                    >
                        <span
                        style={{
                            'padding': '5px'
                        }}
                        >disabledBackground</span>
                    </Theme><Theme
                        iconBackground
                    >
                        <span
                            style={{
                            'padding': '5px'
                        }}

                            className="material-icons"
                        >favorite</span>
                    </Theme>
                    </Theme>
                </fieldset>
                <fieldset>
                    <legend>Text on user-defined light background</legend>
                    <Theme
                        style={{
                            'padding': '16px'
                        }}
                        elementType="div"
                    >
                        <Theme
                            primaryLight
                        >
                            <span
                            style={{
                            'padding': '5px'
                        }}
                            >primaryLight</span>
                        </Theme>
                        <Theme
                            secondaryLight
                        >
                            <span
                            style={{
                            'padding': '5px'
                        }}
                            >secondaryLight</span>
                        </Theme><Theme
                        hintLight
                    >
                        <span
                            style={{
                                'padding': '5px'
                            }}
                        >hintLight</span>
                    </Theme><Theme
                        disabledLight
                    >
                        <span
                        style={{
                            'padding': '5px'
                        }}
                        >disabledLight</span>
                    </Theme><Theme
                        iconLight
                    >
                        <span
                            style={{
                            'padding': '5px'
                        }}

                            className="material-icons"
                        >favorite</span>
                    </Theme>
                    </Theme>
                </fieldset><fieldset>
                    <legend>Text on accent</legend>
                    <Theme
                        style={{
                            'padding': '16px'
                        }}
                        elementType="div"
                        accentBg
                    >
                        <Theme
                            primaryAccent
                        >
                            <span
                            style={{
                            'padding': '5px'
                        }}
                            >primaryAccent</span>
                        </Theme>
                        <Theme
                            secondaryAccent
                        >
                            <span
                            style={{
                            'padding': '5px'
                        }}
                            >secondaryBackground</span>
                        </Theme><Theme
                        hintAccent
                    >
                        <span
                            style={{
                                'padding': '5px'
                            }}
                        >hintAccent</span>
                    </Theme><Theme
                        disabledAccent
                    >
                        <span
                        style={{
                            'padding': '5px'
                        }}
                        >disabledAccent</span>
                    </Theme><Theme
                        iconAccent
                    >
                        <span
                            style={{
                            'padding': '5px'
                        }}

                            className="material-icons"
                        >favorite</span>
                    </Theme>
                    </Theme>
                </fieldset><fieldset>
                    <legend>Text on user-defined dark background</legend>
                    <Theme
                        style={{
                            'padding': '16px',
                            'background': 'black'
                        }}
                        elementType="div"
                        dark
                    >
                        <Theme
                            primaryDark
                        >
                            <span
                            style={{
                            'padding': '5px'
                        }}
                            >primaryDark</span>
                        </Theme>
                        <Theme
                            secondaryDark
                        >
                            <span
                            style={{
                            'padding': '5px'
                        }}
                            >secondaryDark</span>
                        </Theme><Theme
                        hintDark
                    >
                        <span
                            style={{
                                'padding': '5px'
                            }}
                        >hintDark</span>
                    </Theme><Theme
                        disabledDark
                    >
                        <span
                        style={{
                            'padding': '5px'
                        }}
                        >disabledDark</span>
                    </Theme><Theme
                        iconDark
                    >
                        <span
                            style={{
                            'padding': '5px'
                        }}

                            className="material-icons"
                        >favorite</span>
                    </Theme>
                    </Theme>
                </fieldset>
            </div>
        );
    }
}