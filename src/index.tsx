import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from './App';
import Midterm from './styledComponents/Midterm.style';
import Messages from './styledComponents/Messages.style';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Midterm className="Midterm" />} />
          <Route path="messages" element={<Messages className="Messages" />} />
          <Route
            path="messages/:id"
            element={<Messages className="Messages" />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
