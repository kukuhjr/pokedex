import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryProvider } from './lib/react-query/QueryProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <App />

        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
