/**
 * Created by ruslan on 05.07.17.
 */
import React from 'react';
import {
  Dialog,
  DialogSurface,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarIcon,
  ToolbarTitle,
  DialogFooterButton,
  ToolbarMain,
} from '../index'
export default function FullPageDialog ({
      children,
      onAccept,
      onCancel,
      onOpen,
      onClose,
      openDialog
    }){

    return (
      <Dialog
        open={openDialog}
        onAccept={onAccept}
        onCancel={onCancel}
        onOpen={onOpen}
        onClose={onClose}
        fullPage
      >
        <DialogSurface>
          <Toolbar
            fixed
          >
            <ToolbarRow>
              <ToolbarSection start>
                {/*Todo: need this ToolbarIcon + DialogFooterButton => DialogHeaderButton*/}
                <ToolbarIcon
                  menu
                  className='mdc-dialog__footer__button mdc-dialog__footer__button--cancel'
                  style={{
                    'cursor': 'pointer'
                  }}
                >clear</ToolbarIcon>
                <ToolbarTitle>Title</ToolbarTitle>
              </ToolbarSection>
              <ToolbarSection end>
                <DialogFooterButton
                  accept
                  style={{
                    'color': '#fff'
                  }}
                >
                  Submit
                </DialogFooterButton>
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>
          <ToolbarMain fixed>
            {/* new Row container */}
            {children}
          </ToolbarMain>
        </DialogSurface>
      </Dialog>
    );
}