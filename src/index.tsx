import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'pretendard/dist/web/static/pretendard.css';
import './css/reset.css';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

