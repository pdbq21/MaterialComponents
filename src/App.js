import React, {Component} from 'react';
import './app/styles/style.sass'
import Checkbox from './app/components/Checkbox'
import {Button} from './app/components'
import Elevation from './app/components/Elevation'
import Ripple from './app/components/Ripple'
//import {MDCRipple} from 'material-components-web';
//import {MDCRipple} from '@material/ripple/dist/mdc.ripple';

//import {MDCRipple} from '@material/ripple';
//import '@material/ripple/dist/mdc.ripple.css';

//const {MDCRipple, MDCRippleFoundation} = ripple;
class App extends Component {


    render() {
        /* const surface = document.querySelector('.surface');
         const ripple = new MDCRipple(surface);*/
        /* const surface = document.querySelector('.surface');
         const ripple = new MDCRipple(surface);
         ripple.activate();*/
        return (
            <div className="App">
                <div>
                    <h2>Checkbox</h2>
                    <Checkbox
                        className='surface'
                    />
                </div>
                <Ripple>
                    <div className="surface" tabIndex="0">
                        <p>A surface</p>

                    </div>
                </Ripple>
                <div>
                    <Elevation
                        elementTyps=''
                        className=''
                        zSpace='2'
                        id=''
                    >
                        <h2 >Button</h2>

                        <Elevation
                            zSpace='2'
                        >
                            <Button accent>accent</Button>
                            <Button compact>compact</Button>
                            <Button dense>dense</Button>
                            <Button primary>primary</Button>
                            <Button raised>raised</Button>

                        </Elevation>
                        <hr/>
                        <Elevation
                            zSpace='2'
                        >
                            <Button accent raised>accent raised</Button>
                            <Button compact raised>compact raised</Button>
                            <Button dense raised>dense raised</Button>
                            <Button primary raised>primary raised</Button>
                            <Button raised>raised</Button>
                        </Elevation>
                        <hr/>
                        <Elevation
                            zSpace='2'
                        >
                            <Button accent raised disabled>accent raised</Button>
                            <Button compact raised disabled>compact raised</Button>
                            <Button dense raised disabled>dense raised</Button>
                            <Button primary raised disabled>primary raised</Button>
                            <Button raised disabled>raised </Button>
                        </Elevation>
                    </Elevation>

                </div>
                <div>
                    <Elevation
                        elementTyps=''
                        className=''
                        zSpace='2'
                        id=''
                    >

                        <h2>Elevation</h2>
                    </Elevation>
                </div>
            </div>
        );
    }
}


export default App;
