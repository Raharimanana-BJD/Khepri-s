// src/app/Blog/[slug]/page.tsx

import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogById, CardBlogs } from "@/lib/constant";
import { CTA, Typography } from "@/components";
import { ArrowLeft } from "lucide-react";

interface BlogProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CardBlogs.map((blog) => ({
    slug: blog.id,
  }));
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const blog = getBlogById(params.slug);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
  };
}

export default function Article({ params }: BlogProps) {
  const blog = getBlogById(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-[100dvh] pt-[15vh]">
        <CTA url="/Blog/" className="absolute z-50 left-[10px] md:left-[70px] text-grey-100">
          <ArrowLeft/>Blog / {blog.cathegorie}
        </CTA>
      <div className="w-full -z-50 h-[250px] md:h-[450px] relative">
        <Image
          src={blog.img}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary-500 opacity-60"></div>

        <div className="absolute top-1/2 left-1/2 md:left-[29.222222%] transform -translate-x-1/2 -translate-y-1/2 w-[90vw] px-0 md:px-4 md:w-[50vw] text-white">
          <Typography variant="h1" className="mb-4">{blog.title}</Typography>
          <Typography variant="small">{blog.date}</Typography>
        </div>
      </div>
      <div className="container px-8 py-4 md:px-28 md:pb-28 md:pt-16">
        <Typography variant="p" className="text-secondary-500 dark:text-grey-100">{blog.description}</Typography>
      </div>
    </main>
  );
}
