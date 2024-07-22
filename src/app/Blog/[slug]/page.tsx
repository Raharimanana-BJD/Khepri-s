import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogById, CardBlogs } from "@/lib/constant";
import ArticleContent from "./ArticleContent";

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

  return <ArticleContent blog={blog} />;
}
