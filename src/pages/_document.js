//
import { Html, Head, Main, NextScript } from 'next/document';
import { store } from '../store'
import { Provider } from 'react-redux';
//
export default function Document() {
  return (
    <Html lang="en" className="bg-[#ffffff] scroll-smooth text-slate-900" >
      <Head />
      <Provider store={store}>
        <body className="bg-[#ffffff] text-slate-900">
          <Main />
          <NextScript />
        </body>
      </Provider>
    </Html>
  )
}
//