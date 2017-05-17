/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';

import {
    DrawerPermanent,
    PermanentList,
    PermanentListItem,
    DrawerListItemDetail,
    PermanentContent,
    PermanentToolbarSpacer
} from '../../app/index'
export default class DrawerPermanentAbove extends React.Component {

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <fieldset>
                    <legend>Drawer Permanent Above</legend>
                    <div>
                        <DrawerPermanent>
                            <PermanentToolbarSpacer/>
                            <PermanentContent>
                                <PermanentList>
                                    <PermanentListItem selected>
                                        <DrawerListItemDetail icon start>inbox
                                        </DrawerListItemDetail>
                                        Inbox
                                    </PermanentListItem>
                                    <PermanentListItem>
                                        <DrawerListItemDetail icon start>star
                                        </DrawerListItemDetail>
                                        Star
                                    </PermanentListItem>
                                </PermanentList>
                            </PermanentContent>
                        </DrawerPermanent>
                        <div>
                            Toolbar and page content go inside here.
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
}
