import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";

import { Calendar, Eye, Clock, ChevronLeft } from "lucide-react";


// In a real app, you'd fetch this from an API based on the ID
const BLOG_DATA = {
  1: {
    title: "NoteArch: Transforming Academic Management for Global Success",
    category: "EDUCATION",
    date: "Dec 28, 2025",
    views: "189 Views",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/31040303/pexels-photo-31040303.jpeg",
    content: `
      <p>In the rapidly evolving landscape of global education, institutions are facing unprecedented challenges in managing administrative workflows while maintaining academic excellence. NoteArch emerges as a definitive solution, bridging the gap between traditional management and modern digital necessity.</p>
      
      <h3>The Decentralized Shift</h3>
      <p>NoteArch leverages decentralized infrastructure to ensure that student records, faculty performance metrics, and financial data are not just stored, but are accessible and secure. Unlike legacy systems, our cloud-native approach allows for real-time synchronization across multiple campuses.</p>
      
      <blockquote>"The future of education management isn't just about digitizing paper; it's about creating an ecosystem where data empowers decisions."</blockquote>
      
      <h3>Key Transformation Pillars</h3>
      <ul>
        <li><strong>Automated Compliance:</strong> Streamlining regulatory reporting for international standards.</li>
        <li><strong>Unified Analytics:</strong> A single source of truth for all institutional performance indicators.</li>
        <li><strong>Student-Centric UI:</strong> Reducing administrative friction for the end-user.</li>
      </ul>
    `
  },
  // Add more entries as needed...
};

export default function BlogDetailsPage() {
  const { id } = useParams();
  const post = BLOG_DATA[id as unknown as 1];

  if (!post) return <div className="py-40 text-center font-black">Post Not Found</div>;

  return (
    <main className="pt-32 pb-20 bg-white dark:bg-slate-950 min-h-screen transition-colors">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Navigation & Meta */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-8 mb-12"
        >
          <Link to="/blog" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 hover:gap-4 transition-all">
            <ChevronLeft className="w-4 h-4" /> Back to Insights
          </Link>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase">
                {post.category}
              </span>
              <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              {post.title}
            </h1>

            <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400 border-y border-slate-100 dark:border-slate-900 py-6">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-600" /> {post.date}</span>
              <span className="flex items-center gap-2"><Eye className="w-4 h-4 text-blue-600" /> {post.views}</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Article Body */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Share Sidebar */}
          <aside className="lg:col-span-1 flex lg:flex-col gap-6 items-center">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 lg:rotate-90 lg:mb-12">Share</div>
            <ShareButton icon={<FaFacebook />} />
            <ShareButton icon={<BsTwitterX />} />
            <ShareButton icon={<FaLinkedinIn />} />
          </aside>

          {/* Text Content */}
          <article className="lg:col-span-11 prose prose-slate dark:prose-invert max-w-none 
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:text-lg prose-p:leading-relaxed
            prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-900 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:italic
            prose-strong:text-blue-600">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>

        {/* Bottom CTA */}
        <footer className="mt-20 pt-12 border-t border-slate-100 dark:border-slate-900">
          <div className="bg-slate-900 dark:bg-blue-600 p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-black">Want more insights?</h4>
              <p className="text-blue-100 opacity-80">Subscribe to our newsletter for weekly educational tech updates.</p>
            </div>
            <Link to="/contact" className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:scale-105 transition-transform">
              Join Ecosystem
            </Link>
          </div>
        </footer>

      </div>
    </main>
  );
}

function ShareButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-12 h-12 rounded-full border border-slate-100 dark:border-slate-900 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
      {cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })}
    </button>
  );
}
import { cloneElement } from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
