import './styles/global.css';

export const metadata = {
  title: 'AI Meeting Notes',
  description: 'Summarize and share meeting notes with AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/Sarthi-logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
