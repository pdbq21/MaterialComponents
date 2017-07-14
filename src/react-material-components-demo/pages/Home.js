/**
 * Created by ruslan on 05.06.17.
 */
import React, { Component } from 'react'
function getCurrentTime(callback) {
// Get the current 'global' time from an API
  return setTimeout(function() {
    var currentTime = new Date();
    callback(currentTime);
  }, 2000);
}
getCurrentTime(function(currentTime) {
  console.log('The current time is: ' + currentTime);
});
export default class Home extends Component {

    render() {
        return (
            <div >
home

            </div>
        )
    }
}
