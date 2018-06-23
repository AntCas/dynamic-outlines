import React from 'react';
import { render } from 'react-dom';

//import DynamicOutlines from 'dynamic-outlines';
import DynamicOutlines from '../../src/DynamicOutlines';

render(
  <div style={{ textAlign: "center" }}>
    <h2>React Dynamic Outlines Demo</h2>
    <div
      style={{
        display:        'flex',
        fledDirection:  'row',
        justifyContent: 'center',
        alignItems:     'center',
        marginTop:      '50px'
      }}>
      <div id="parent-id"
        style={{
          position:   'relative',
          height:     '200px',
          width:      '200px',
          background: 'black',
        }}>
        <DynamicOutlines
          parentId="parent-id"
          borderColor="black"
          borderGap={ 3 }
          borderWidth={ 4 }
          transitionTime="150ms" />
      </div>
    </div>
  </div>, 
  document.getElementById('app')
);
