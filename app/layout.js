import "../styles/globals.css";
import Script from "next/script";

export const metadata = {
  title: "Ad Only Website",
  description: "Ad-only website with Google AdSense",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4344533853971687"
     crossOrigin="anonymous"></script>
        {children}
      </body>
    </html>
  );
}
