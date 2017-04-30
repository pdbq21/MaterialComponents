/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';

import {
    LayoutGrid,
    LayoutGridCell
} from '../../app/lib'

export default class LayoutGrids extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            margin: '8px',
            gutter: '8px'
        };

        this.handleChangeMargin = this.handleChangeMargin.bind(this);
        this.handleChangeGutter = this.handleChangeGutter.bind(this);
    }

    handleChangeMargin({currentTarget}) {
        this.setState({margin: currentTarget.value});
    }

    handleChangeGutter({currentTarget}) {
        this.setState({gutter: currentTarget.value});
    }

    render() {
        const {margin, gutter} = this.state;
        return (
            <div className="layout-grid--demo">
                <fieldset>
                    <legend>Layout Grid</legend>
                    <div>
                        Margin:
                        <select name="" id="margin" onChange={this.handleChangeMargin}>
                            <option value="8px">8px</option>
                            <option value="16px">16px</option>
                            <option value="24px">24px</option>
                            <option value="40px">40px</option>
                        </select>
                    </div>
                    <div>
                        Gutter:
                        <select name="" id="gutter" onChange={this.handleChangeGutter}>
                            <option value="8px">8px</option>
                            <option value="16px">16px</option>
                            <option value="24px">24px</option>
                            <option value="40px">40px</option>
                        </select>
                    </div>
                    <LayoutGrid gutter={gutter} margin={margin}>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                        <LayoutGridCell columns="1">1</LayoutGridCell>
                    </LayoutGrid>
                    <LayoutGrid margin={margin} gutter={gutter}>
                        <LayoutGridCell columns="4">4</LayoutGridCell>
                        <LayoutGridCell columns="4">4</LayoutGridCell>
                        <LayoutGridCell columns="4">4</LayoutGridCell>
                    </LayoutGrid>
                    <LayoutGrid gutter={gutter} margin={margin}>
                        <LayoutGridCell columns="6">6</LayoutGridCell>
                        <LayoutGridCell columns="4">4</LayoutGridCell>
                        <LayoutGridCell columns="2">2</LayoutGridCell>
                    </LayoutGrid>
                    <LayoutGrid gutter={gutter} margin={margin}>
                        <LayoutGridCell columns="6" tablet="8">6 tablet 8</LayoutGridCell>
                        <LayoutGridCell columns="4" tablet="6">4 tablet 6</LayoutGridCell>
                        <LayoutGridCell columns="2" phone="4">2 phone 4</LayoutGridCell>
                    </LayoutGrid>
                </fieldset>
            </div>
        );
    }
}
