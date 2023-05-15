type Post = {
  title: string;
  createdAt: string;
  publishedAt: string;
  banner: string;
  content: string;
  meta: {
    description: string;
    slug: string;
  };
};

type Meta = {
  slug?: string;
  title?: string;
  url?: string;
  author?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  publishedAt?: number;
  updatedAt?: number;
  keywords?: Array<string>;
};
