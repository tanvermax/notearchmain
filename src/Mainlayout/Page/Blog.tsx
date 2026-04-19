"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CalendarDays, 
  Clock, 
  ArrowRight, 
  Newspaper, 
  Search,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "../CommonLayout/Home/blog";


// Using the exact data from your LatestBlogSection for consistency
// const ALL_BLOG_POSTS = [
//   {
//     id: 1,
//     title: "NoteArch: Transforming Academic Management for Global Success",
//     category: "EDUCATION",
//     date: "Dec 28, 2025",
//     readTime: "5 min read",
//     views: "189 Views",
//     description: "Discover how NoteArch is redefining institutional efficiency through decentralized infrastructure and cloud-native tools.",
//     image: "https://images.pexels.com/photos/31040303/pexels-photo-31040303.jpeg",
//     color: "from-blue-600 to-indigo-600",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Revolutionizing Education Through AI-Powered Intelligence",
//     category: "NEWS",
//     date: "Nov 28, 2025",
//     readTime: "4 min read",
//     views: "696 Views",
//     description: "NoteArch is an artificial intelligence powered, secured and cost effective Intelligent Academic Lifecycle Management System.",
//     image: "https://images.pexels.com/photos/18069494/pexels-photo-18069494.png",
//     color: "from-emerald-600 to-teal-600",
//   },
//   // Add more posts matching this structure...
// ];

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const regularPosts = BLOG_POSTS.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 transition-colors">
      <div className="container mx-auto px-6 max-w-7xl relative">
        
        {/* Futuristic Header */}
        <header className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-500/10 text-blue-600 dark:text-blue-400"
          >
            <Newspaper className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Knowledge Hub</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85]">
            NoteArch <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic">Perspectives</span>
          </h1>
          <p className="max-w-xl text-slate-500 dark:text-slate-400 font-medium text-lg">
             The latest research, technical updates, and academic insights from the future of institutional management.
          </p>

          {/* Search Bar UI */}
          <div className="relative w-full max-w-md mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search academic insights..."
              className="w-full h-14 pl-12 pr-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-sm"
            />
          </div>
        </header>

        {/* Hero Featured Article */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <Link to={`/blog/${featuredPost.id}`} className="group">
              <div className="relative rounded-[4rem] bg-slate-900 overflow-hidden min-h-[500px] flex flex-col justify-end p-8 md:p-16 text-white border border-white/5 shadow-2xl">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img src={featuredPost.image} alt="" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                <div className="relative z-10 space-y-6 max-w-3xl">
                  <Badge className="bg-blue-600 hover:bg-blue-600 text-[10px] font-black tracking-[0.2em] px-4 py-1.5">FEATURED ARTICLE</Badge>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-300 text-lg font-medium line-clamp-2 opacity-80">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center gap-6 pt-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-blue-500" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" /> {featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {regularPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/blog/${post.id}`} className="group flex flex-col h-full">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-6 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  <img 
                    src={post.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md text-[10px] font-black tracking-widest text-slate-900 dark:text-white border border-white/20">
                      {post.category}
                    </span>
                  </div>
                  {/* Glass Card on hover */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
                </div>

                <div className="flex flex-col gap-4 px-4">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span>{post.date}</span>
                    <div className="w-1 h-1 rounded-full bg-blue-600" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                    Explore Details <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Ecosystem */}
        <section className="mt-32 relative rounded-[4rem] bg-slate-950 p-12 md:p-24 text-center overflow-hidden border border-white/5">
           {/* Decorative background pulse */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-3xl bg-blue-600 flex items-center justify-center text-white shadow-2xl shadow-blue-500/40">
                <Zap className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Synchronize with our <br /> <span className="text-blue-500">Latest Discoveries.</span>
            </h2>
            <p className="text-slate-400 font-medium">
              Join 12,000+ educational leaders. No spam. Only high-performance research and feature updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="institution@domain.com" 
                className="flex-1 h-14 px-6 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500 transition-all font-medium"
              />
              <Button className="h-14 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}