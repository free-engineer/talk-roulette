import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./Header";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata = {
  title: "トークルーレット",
  description: "なにがでるかなっ♪なにがでるかなっ♪って歌いながら遊んでください",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
