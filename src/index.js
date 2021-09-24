import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Core} from './Core';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <h1>Binance NFT sorting by price</h1>,
  document.getElementById('title')
);

ReactDOM.render(
  <h3>Please note that it only returns Mystery Boxes from the most recent</h3>,
  document.getElementById('subtitle')
);

ReactDOM.render(
  <p>This is a very simple app, to use it you have to disable Cross-Origin Resource Sharing (CORS). <strong>Attention, after use it re-enables the CORS.</strong></p>,
  document.getElementById('cors')
);

ReactDOM.render(
  <p>This site is <a href="https://github.com/matteocelani/BinanceNFT" target="_blank">open source </a><strong>Send a donation: 0x18Ca610d13d7639678927B20455f2a57C46aE078</strong></p>,
  document.getElementById('credits')
);

ReactDOM.render(<Core />, document.querySelector('#core'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
