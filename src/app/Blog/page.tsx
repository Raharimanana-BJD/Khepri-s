"use client"

import { useState, ChangeEvent } from 'react';
import { CardBlog, Typography } from '@/components';
import { CardBlogs } from '@/lib/constant';
import { Search } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface BlogCard {
  id: string;
  img: StaticImageData;
  title: string;
  cathegorie: string;
  description: string;
  date: string;
  url: string;
}

interface WrapcardProps {
  filteredBlogs: BlogCard[];
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = CardBlogs.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
    // card.cathegorie.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-[100dvh]">
      <section className="container flex flex-col items-center justify-center pt-[20vh]">
        <Typography variant="h1" className="text-secondary-500 dark:text-grey-100 text-center">
          Articles blog
        </Typography>
        <Typography variant='p' className='text-grey-500 text-center'>
          L&apos;agence propose une gamme complète de services incluant des compétences <br /> techniques, du design et une compréhension des affaires.
        </Typography>
        <div>
          <div className="flex items-center justify-between rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-[50vw] mt-4">
            <input
              type="text"
              id="name"
              placeholder="Commencez à taper ici"
              className="inline-block w-full placeholder:text-grey-500 px-4 py-2 outline-none bg-inherit"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit" className="flex-1 p-4"><Search /></button>
          </div>
        </div>
      </section>

      <Wrapcard filteredBlogs={filteredBlogs} />
    </main>
  );
}

function Wrapcard({ filteredBlogs }: WrapcardProps) {
  return (
    <section className="container">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full py-8">
        {
          filteredBlogs.map((card) => (
            <Link href={`/Blog/${card.id}`} key={card.id}>
              <CardBlog>
                <Image src={card.img} alt={card.title} priority className="object-cover w-full h-44" />
                <div className="p-5 flex flex-col justify-start">
                  <Typography variant="small" className="mb-3 text-secondary-500 text-xs font-semibold tracking-wide uppercase">{card.title}</Typography>
                  <Typography variant="h3" className="font-bold leading-5 text-secondary-500">{card.cathegorie}</Typography>
                  <Typography variant="p" className="text-grey-500 [&:not(:first-child)]:mt-4 line-clamp-2">{card.description}</Typography>
                  <Typography variant="small" className="[&:not(:first-child)]:mt-4">{card.date}</Typography>
                </div>
              </CardBlog>
            </Link>
          ))
        }
      </div>
    </section>
  );
}
