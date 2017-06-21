/**
 * Created by ruslan on 20.06.17.
 */
import React, {Component} from 'react'
//import Highlight from 'react-highlight.js'
import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarTitle,
    ToolbarMain,
} from '../../lib/index'


export default class ToolbarFixedPage extends Component {

    render() {
        return (
            <section>
                <Toolbar
                    fixed
                >
                    <ToolbarRow>
                        <ToolbarSection start>
                            <a className="material-icons">menu</a>
                            <ToolbarTitle>Title</ToolbarTitle>
                        </ToolbarSection>
                        <ToolbarSection end>
                            <a className="material-icons" aria-label="Download" alt="Download">file_download</a>
                            <a className="material-icons" aria-label="Print this page"
                               alt="Print this page">print</a>
                            <a className="material-icons" aria-label="Bookmark this page" alt="Bookmark this page">more_vert</a>
                        </ToolbarSection>
                    </ToolbarRow>
                </Toolbar>
                <ToolbarMain fixed>
                    <h3>Is Top</h3>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                        egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                        Donec
                        eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque
                        habitant
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
                        tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
                        quam
                        egestas semper. Aenean ultricies mi vitae est.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                        egestas.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                        libero
                        sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam,
                        feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
                        egestas
                        semper. Aenean ultricies mi vitae est.
                    </p>
                </ToolbarMain>
            </section>
        )
    }
}
