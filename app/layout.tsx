import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "دور البعثات الدبلوماسية والقنصلية في الحماية الدبلوماسية",
  description:
    "بحث علمي يوضح دور البعثات الدبلوماسية والقنصلية في تفعيل أعمال الحماية الدبلوماسية ضمن إطار القانون الدولي العام."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
