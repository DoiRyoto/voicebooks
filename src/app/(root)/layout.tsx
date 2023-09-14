import MyHeader from "@/components/myHeader"
import { Providers } from "../../lib/providers";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MyHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}