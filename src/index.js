import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider }  from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render( 
      <SpeechProvider appId="c2fbd039-cb4c-4d76-b444-807e034f6e1d" language="en-US">
      <Provider>
         <App />
      </Provider>,
      </SpeechProvider>,
      document.getElementById('root')
);