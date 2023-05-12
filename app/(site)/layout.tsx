import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';
import '../globals.css';

export const metadata = {
  title: 'Julian Figueroa',
  description: 'Software Engineer',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // get all pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link className="text-lg text-orange-500 font-bold" href="/">
            Julian
          </Link>
          {pages?.length && (
            <div className="flex items-center gap-5 text-sm text-gray-600">
              {pages?.map((page) => (
                <Link className="hover:underline" key={page?._id} href={`/${page?.slug}`}>
                  {page?.title}
                </Link>
              ))}
            </div>
          )}
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
