import "../styles/globals.css";

export const metadata = {
  title: "Awwwards Submission · Luminous WebGL",
  description: "Next.js 16 + Three.js Fibre + Lenis smooth scroll experience."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
