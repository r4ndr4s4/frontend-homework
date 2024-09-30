import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import store from './app/store';
import queryClient from './app/client';
import { AppThemeProvider } from './themes/AppThemeProvider';
import Error from './components/Error';

import App from './App';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Error}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppThemeProvider>
            <App />
            <Analytics />
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-right" />
          </AppThemeProvider>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
