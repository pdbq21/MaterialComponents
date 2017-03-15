/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';

import {
    LayoutGrid,
    LayoutGridCell
} from '../../app/lib'

export default function LayoutGrids() {

    return (
        <div className="layout-grid--demo">
            <fieldset>
                <legend>Layout Grid</legend>
                <LayoutGrid margin='100px'>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                    <LayoutGridCell columns="1" >1</LayoutGridCell>
                </LayoutGrid>
                <LayoutGrid>
                    <LayoutGridCell columns="4" >4</LayoutGridCell>
                    <LayoutGridCell columns="4" >4</LayoutGridCell>
                    <LayoutGridCell columns="4" >4</LayoutGridCell>
                </LayoutGrid>
                <LayoutGrid>
                    <LayoutGridCell columns="6" >6</LayoutGridCell>
                    <LayoutGridCell columns="4" >4</LayoutGridCell>
                    <LayoutGridCell columns="2" >2</LayoutGridCell>
                </LayoutGrid>
                <LayoutGrid>
                    <LayoutGridCell columns="6" tablet="8">6 tablet 8</LayoutGridCell>
                    <LayoutGridCell columns="4" tablet="6">4 tablet 6</LayoutGridCell>
                    <LayoutGridCell columns="2" phone="4">2 phone 4</LayoutGridCell>
                </LayoutGrid>
            </fieldset>
        </div>
    );
}