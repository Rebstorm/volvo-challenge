import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {StyleProvider, ThemeProvider} from 'vcc-ui';
import volvo from 'vcc-ui/lib/themes/volvo';
import {Carousel} from "./components/carousel/carousel";

ReactDOM.render(
  <React.StrictMode>
      <StyleProvider>
          <ThemeProvider theme={volvo}>
              <Carousel theme={volvo}/>
          </ThemeProvider>
      </StyleProvider>
  </React.StrictMode>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
