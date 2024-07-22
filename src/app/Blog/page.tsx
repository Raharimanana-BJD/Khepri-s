"use client"

import { useState, ChangeEvent } from 'react';
import { CardBlog, Typography } from '@/components';
import { CardBlogs } from '@/lib/constant';
import { Search } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const {ref, inView} = useInView({threshold:0.5})
  return (
    <main ref={ref} className="min-h-[100dvh]">
      <section className="container flex flex-col items-center justify-center pt-[20vh]">
        <motion.div
          initial={{y:50, opacity:0}}
          animate={inView ? {y:0, opacity:1}:{}}
          transition={{
            type:"spring",
            stiffness:125,
            delay:0.1,
            duration:0.7
          }}
        >
          <Typography variant="h1" className="text-secondary-500 dark:text-grey-100 text-center">
            Articles blog
          </Typography>
        </motion.div>
        <motion.div
          initial={{y:50, opacity:0}}
          animate={inView ? {y:0, opacity:1}:{}}
          transition={{
            type:"spring",
            stiffness:125,
            delay:0.2,
            duration:0.7
          }}
        >
          <Typography variant='p' className='text-grey-500 text-center mt-4'>
            L&apos;agence propose une gamme complète de services incluant des compétences <br /> techniques, du design et une compréhension des affaires.
          </Typography>
        </motion.div>
          <motion.div
          initial={{scale:0, opacity:0}}
          animate={inView ? {scale:1, opacity:1}:{}}
          transition={{
            type:"spring",
            stiffness:125,
            delay:0.3,
            duration:0.7
          }}
          className="flex items-center justify-between rounded-lg border text-secondary-500 dark:text-grey-100 border-secondary-500 dark:border-grey-100 w-[50vw] mt-4">
            <input
              type="text"
              id="name"
              placeholder="Commencez à taper ici"
              className="inline-block w-full placeholder:text-grey-500 px-4 py-2 outline-none bg-inherit"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit" className="flex-1 p-4"><Search /></button>
          </motion.div>
      </section>

      <Wrapcard filteredBlogs={filteredBlogs} />
    </main>
  );
}

function Wrapcard({ filteredBlogs }: WrapcardProps) {
  const {ref, inView} = useInView({threshold:0.35})
  return (
    <section ref={ref} className="container">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full py-8">
        {
          filteredBlogs.map((card, index) => (
            <motion.div
            initial={{opacity:0, y:50}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{duration:0.5, delay: index * 0.3}}
            key={card.id}
            >
              <Link href={`/Blog/${card.id}`}>
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
            </motion.div>
          ))
        }
      </div>
    </section>
  );
}
