import "./globals.css";

export const metadata = {
  title: "Hostel360 | Campus Life, Sorted",
  description:
    "Your campus life platform for mess, laundry, cleaning, PGs, cafes and roommates.",
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full w-full max-w-full overflow-x-hidden antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
