
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
// or 'next/link' if using Next.js

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Digital Education in 2026",
    excerpt: "Exploring how AI-driven tools like OneTab are reshaping the classroom experience for teachers and students alike.",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering Smart Classroom Management",
    excerpt: "Tips and tricks for educators to keep students engaged using interactive whiteboards.",
    date: "Sep 28, 2025",
    readTime: "4 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Why Hybrid Learning is Here to Stay",
    excerpt: "A deep dive into the statistics of remote vs. in-person learning efficiency.",
    date: "Sep 15, 2025",
    readTime: "6 min read",
    category: "Research",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1000&auto=format&fit=crop",
  },
  // Add more posts as needed...
];

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const regularPosts = BLOG_POSTS.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
            Insights, updates, and guides from the NoteArch team.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <Card className="overflow-hidden border-none shadow-xl bg-white dark:bg-slate-900 flex flex-col lg:flex-row h-full lg:h-[450px]">
              <div className="lg:w-1/2 overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                <h2 className="text-3xl font-bold mb-4 dark:text-white leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
                  <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featuredPost.readTime}</span>
                </div>
                <Button className="w-fit gap-2" size="lg">
                  Read Article <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </section>
        )}

        {/* Regular Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-slate-900 transition-all hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader className="space-y-1">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="mt-auto border-t border-slate-100 dark:border-slate-800 pt-4">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{post.date}</span>
                  <Button variant="ghost" size="sm" className="gap-1 px-0 hover:bg-transparent hover:text-primary">
                    Read More <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="mt-24 rounded-3xl bg-primary/5 dark:bg-primary/10 p-8 md:p-12 text-center border border-primary/10">
          <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Get the latest updates on educational technology and digital classroom tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  );
}