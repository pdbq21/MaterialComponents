import React, {Component} from 'react';
import './app/styles/style.sass'
import Checkbox from './app/components/Checkbox'
import {Button} from './app/components'
import Elevation from './app/components/Elevation'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <h2>Checkbox</h2>
                    <Checkbox

                    />
                </div>

                <div>
                    <Elevation
                        elementTyps=''
                        className=''
                        zSpace='2'
                        id=''
                    >
                        <h2>Button</h2>

                        <Elevation
                            zSpace='2'
                        >
                            <Button accent >accent</Button>
                            <Button compact >compact</Button>
                            <Button dense >dense</Button>
                            <Button primary >primary</Button>
                            <Button raised >raised</Button>
                        </Elevation>
                        <hr/>
                        <Elevation
                            zSpace='2'
                        >
                            <Button accent raised>accent raised</Button>
                            <Button compact raised>compact raised</Button>
                            <Button dense raised>dense raised</Button>
                            <Button primary raised >primary raised</Button>
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
