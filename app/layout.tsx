import './globals.css';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <header>
            <h1>App de Receitas</h1>
          </header>
          <main>{children}</main>
          <footer>
            <p>Footer</p>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}

