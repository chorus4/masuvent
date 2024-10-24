import Footer from './footer/footer'
import './globals.css'
import Header from './header/header'
import Layoutt from './Layoutt'

export const metadata = {
  title: 'MASUVENT',
  description: 'MASUVENT магазин одежды',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <head>
        {/* <meta name='viewport' content='width=100vw, initial-scale=1.0' /> */}
      </head>
      <body>
        <Layoutt>
          <Header />
          {children}
          <Footer />
        </Layoutt>
      </body>
    </html>
  )
}
