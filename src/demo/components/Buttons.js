/**
 * Created by ruslan on 13.03.17.
 */
import React from 'react';
import {Button} from '../../app/lib'
import {Ripple} from '../../app/lib'
import {Elevation} from '../../app/lib'

export default function Buttons() {

    return (
        <div>
            <Elevation
                elementTyps=''
                className=''
                zSpace='2'
                id=''
            >
                <fieldset>
                    <legend>Buttons with Ripple</legend>
                    <Ripple><Button>default</Button></Ripple>
                    <Ripple><Button raised>raised</Button></Ripple>
                    <Ripple><Button dense>dense</Button></Ripple>
                    <Ripple><Button dense raised>dense raised</Button></Ripple>
                    <Ripple><Button compact>compact</Button></Ripple>
                    <Ripple><Button compact raised>compact raised</Button></Ripple>
                    <Ripple><Button primary>primary</Button></Ripple>
                    <Ripple><Button primary raised>primary raised</Button></Ripple>
                    <Ripple><Button accent>accent</Button></Ripple>
                    <Ripple><Button accent raised>accent raised</Button></Ripple>
                    <Ripple><Button elementType="div">div</Button></Ripple>
                    <Ripple><Button elementType="div" raised>div raised</Button></Ripple>
                </fieldset>
                <fieldset>
                    <legend>Buttons with Only CSS</legend>
                    <Button>default</Button>
                    <Button raised>raised</Button>
                    <Button dense>dense</Button>
                    <Button dense raised>dense raised</Button>
                    <Button compact>compact</Button>
                    <Button compact raised>compact raised</Button>
                    <Button primary>primary</Button>
                    <Button primary raised>primary raised</Button>
                    <Button accent>accent</Button>
                    <Button accent raised>accent raised</Button>
                    <Button elementType="div">div</Button>
                    <Button elementType="div" raised>div raised</Button>
                </fieldset>

                <fieldset>
                    <legend>Links with Button style</legend>
                    <Button elementType="a" href='#'>default</Button>
                    <Button elementType="a" href='#' raised>raised</Button>
                    <Button elementType="a" href='#' dense>dense</Button>
                    <Button elementType="a" href='#' dense raised>dense raised</Button>
                    <Button elementType="a" href='#' compact>compact</Button>
                    <Button elementType="a" href='#' compact raised>compact raised</Button>
                    <Button elementType="a" href='#' primary>primary</Button>
                    <Button elementType="a" href='#' primary raised>primary raised</Button>
                    <Button elementType="a" href='#' accent>accent</Button>
                    <Button elementType="a" href='#' accent raised>accent raised</Button>
                </fieldset>
                <fieldset>
                    <legend>Disabled Buttons</legend>
                    <Button disabled>default</Button>
                    <Button disabled raised>raised</Button>
                    <Button disabled dense>dense</Button>
                    <Button disabled dense raised>dense raised</Button>
                    <Button disabled compact>compact</Button>
                    <Button disabled compact raised>compact raised</Button>
                    <Button disabled primary>primary</Button>
                    <Button disabled primary raised>primary raised</Button>
                    <Button disabled accent>accent</Button>
                    <Button disabled accent raised>accent raised</Button>
                    /* disabled work only Form or Form elements */
                    <Button disabled elementType="div">div</Button>
                    <Button disabled elementType="div" raised>div raised</Button>
                </fieldset>
            </Elevation>
        </div>
    );
}

