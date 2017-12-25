import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch as SwitchRoute
} from 'react-router-dom'
/*import ComponentsList from './demo/containers/ComponentsList';
 //import App from './demo/containers/ComponentsView';
 import configureStore from './demo/store/configureStore';

 const store = configureStore();*/
import './react-material-components-demo/styles.css'
import App from './react-material-components-demo/App'
import {
  ToolbarNormal,
  ToolbarFixed,
  ToolbarWaterFall,
  ToolbarFlexiblePage,
  ToolbarWaterfallFlexiblePage,
  ToolbarWaterfallFixLastRowPage,
  TemporaryToolbarSpacer,
  TemporaryHeader,
  PersistentHeader,
  PersistentToolbarSpacer,
  PermanentBelowToolbar,
  PermanentAboveToolbar
} from './react-material-components-demo/pages'


ReactDOM.render(
  <Router>
    <SwitchRoute>
      <Route path='/toolbar_normal' component={ToolbarNormal}/>
      <Route path='/toolbar_fixed' component={ToolbarFixed}/>
      <Route path='/toolbar_waterfall' component={ToolbarWaterFall}/>
      <Route path='/toolbar_flexible' component={ToolbarFlexiblePage}/>
      <Route path='/toolbar_wf' component={ToolbarWaterfallFlexiblePage}/>
      <Route path='/toolbar_wflr' component={ToolbarWaterfallFixLastRowPage}/>
      <Route path='/drawer/temporary_toolbar_spacer' component={TemporaryToolbarSpacer}/>
      <Route path='/drawer/temporary_header' component={TemporaryHeader}/>
      <Route path='/drawer/persistent_header' component={PersistentHeader}/>
      <Route path='/drawer/persistent_toolbar_spacer' component={PersistentToolbarSpacer}/>
      <Route path='/drawer/permanent_below_toolbar' component={PermanentBelowToolbar}/>
      <Route path='/drawer/permanent_above_toolbar' component={PermanentAboveToolbar}/>
      <Route component={App}/>
    </SwitchRoute>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();