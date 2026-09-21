import "./globals.css";

export const metadata = {
  title: "Studentica | Campus Life, Sorted",
  description:
    "Your campus life platform for mess, laundry, cleaning, PGs, cafes and roommates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}