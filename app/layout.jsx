import "./globals.css";
import Header from './header/header';

export const metadata = {
  title: "MASUVENT",
  description: "MASUVENT магазин одежды",
};

export default function RootLayout({ children }) {
  const work = true

  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
