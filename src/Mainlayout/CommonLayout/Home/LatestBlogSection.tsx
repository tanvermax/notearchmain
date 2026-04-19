
import { motion } from "framer-motion";
import { Calendar, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const BLOG_POSTS = [
  {
    id: 1,
    title: "NoteArch: Transforming Academic Management for...",
    category: "EDUCATION",
    date: "Dec 28, 2025",
    views: "189 Views",
    description: "NoteArch Transforming Academic Management",
    image: "https://images.pexels.com/photos/31040303/pexels-photo-31040303.jpeg" // Replace with your actual image path
  },
  {
    id: 2,
    title: "NoteArch: Revolutionizing Education Through AI-...",
    category: "NEWS",
    date: "Nov 28, 2025",
    views: "696 Views",
    description: "NoteArch is an artificial intelligence powered, secured and cost effective Intelligent Academic Lifecycle Management System...",
    image: "https://images.pexels.com/photos/18069494/pexels-photo-18069494.png" // Replace with your actual image path
  }
];

export default function LatestBlogSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-blue-900 dark:text-blue-400 mb-12">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800"
            >
              {/* Post Image & Badge */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-bold text-white ${
                  post.category === 'EDUCATION' ? 'bg-blue-500' : 'bg-emerald-500'
                }`}>
                  {post.category}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-500" />
                    {post.views}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-blue-900 dark:text-white leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 line-clamp-2">
                  {post.description}
                </p>

                <button className="flex items-center gap-2 text-blue-600 font-bold hover:underline transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link to={"/blog"} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-lg shadow-blue-200">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
}