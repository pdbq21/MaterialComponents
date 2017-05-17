/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';

import {
    DrawerPermanent,
    PermanentList,
    PermanentListItem,
    DrawerListItemDetail
} from '../../app/index'
export default class DrawerPermanentBelow extends React.Component {

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <fieldset>
                    <legend>Drawer Permanent Below</legend>
                    <div>Toolbar goes here</div>
                    <div>
                        <DrawerPermanent>
                            <PermanentList>
                                <PermanentListItem selected>
                                    <DrawerListItemDetail icon start>
                                        inbox
                                    </DrawerListItemDetail>
                                    Inbox
                                </PermanentListItem>
                                <PermanentListItem>
                                    <DrawerListItemDetail icon start>
                                        star
                                    </DrawerListItemDetail>
                                    Star
                                </PermanentListItem>
                            </PermanentList>
                        </DrawerPermanent>
                        <main>
                            Page content goes here.
                        </main>
                    </div>
                </fieldset>
            </div>
        );
    }

}
