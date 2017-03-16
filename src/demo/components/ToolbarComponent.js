/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';

import {
    Toolbar,
    ToolbarSection,
    ToolbarTitle,
    ToolbarMain
} from '../../app/lib'

export default function ToolbarComponent() {

    return (
        <div className="toolbar--demo">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <fieldset>
                <legend>Normal Toolbar</legend>
                <section style={{'height': '20em', 'overflow': 'auto'}}>
                    <Toolbar>
                        <ToolbarSection start>
                            <a className="material-icons">menu</a>
                            <ToolbarTitle>Title</ToolbarTitle>
                        </ToolbarSection>
                        <ToolbarSection end>
                            <a className="material-icons" aria-label="Download" alt="Download">file_download</a>
                            <a className="material-icons" aria-label="Print this page" alt="Print this page">print</a>
                            <a className="material-icons" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
                        </ToolbarSection>
                    </Toolbar>
                    <ToolbarMain>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                            eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant
                            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
                            quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
                            egestas semper. Aenean ultricies mi vitae est.
                        </p>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                            libero
                            sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
                            tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                            semper. Aenean ultricies mi vitae est.
                        </p>
                    </ToolbarMain>
                </section>

            </fieldset>
            <fieldset>
                <legend>Fixed Toolbar</legend>
                <section style={{'height': '20em', 'overflow': 'auto'}}>
                    <Toolbar fixed>
                        <ToolbarSection start>
                            <a className="material-icons">menu</a>
                            <ToolbarTitle>Title</ToolbarTitle>
                        </ToolbarSection>
                        <ToolbarSection end>
                            <a className="material-icons" aria-label="Download" alt="Download">file_download</a>
                            <a className="material-icons" aria-label="Print this page" alt="Print this page">print</a>
                            <a className="material-icons" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
                        </ToolbarSection>
                    </Toolbar>
                    <ToolbarMain fixed>
                        <h3>Is Top</h3>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                            eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant
                            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
                            quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
                            egestas semper. Aenean ultricies mi vitae est.
                        </p>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                            libero
                            sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
                            tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                            semper. Aenean ultricies mi vitae est.
                        </p>
                    </ToolbarMain>
                </section>

            </fieldset>
        </div>
    );
}