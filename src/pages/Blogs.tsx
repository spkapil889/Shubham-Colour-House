import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Best Paint for Home Interiors in Rajasthan',
    excerpt: 'Choosing the right paint for Rajasthan\'s climate is crucial. Learn about heat-resistant and durable options.',
    category: 'Interior Paint Tips',
    date: 'Mar 15, 2026',
    author: 'Shubham Expert',
    image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled-1.webp'
  },
  {
    id: 2,
    title: 'How to Choose the Right Exterior Paint',
    excerpt: 'Protect your home from dust and harsh sunlight with our comprehensive guide to exterior coatings.',
    category: 'Exterior Paint Care',
    date: 'Mar 10, 2026',
    author: 'Shubham Expert',
    image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled-1.webp'
  },
  {
    id: 3,
    title: 'Waterproofing Basics Every Homeowner Should Know',
    excerpt: 'Don\'t wait for the monsoon. Learn how to identify and fix leakage problems before they cause damage.',
    category: 'Waterproofing',
    date: 'Mar 05, 2026',
    author: 'Shubham Expert',
    image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/spacious-living-room-in-modern-apartment-2025-02-10-09-52-33-utc-1-scaled-1.webp'
  },
  {
    id: 4,
    title: 'Paint Finish Guide: Matte, Satin, Gloss',
    excerpt: 'Which finish is right for which room? We break down the pros and cons of every paint finish.',
    category: 'Product Guides',
    date: 'Feb 28, 2026',
    author: 'Shubham Expert',
    image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/warm-and-cozy-composition-of-living-room-interior-2024-10-17-17-58-03-utc-1-2048x1365-1.webp'
  },
  {
    id: 5,
    title: 'How Much Paint Does Your Home Need?',
    excerpt: 'A step-by-step guide to calculating paint requirement for different areas of your home.',
    category: 'Product Guides',
    date: 'Feb 20, 2026',
    author: 'Shubham Expert',
    image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/5.webp'
  },
  {
    id: 6,
    title: 'Top Colour Trends for Modern Indian Homes',
    excerpt: 'Discover the most popular colour palettes for 2026 and how to use them in your space.',
    category: 'Color Ideas',
    date: 'Feb 15, 2026',
    author: 'Shubham Expert',
    image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/6.webp'
  }
];

const categories = ['All', 'Interior Paint Tips', 'Exterior Paint Care', 'Waterproofing', 'Color Ideas', 'Painter Advice', 'Product Guides'];

export default function Blogs() {
  return (
    <div className="bg-brand-paper min-h-screen">
      {/* Hero */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-8"
          >
            <Calendar className="w-4 h-4 text-brand-purple" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-purple">Editorial Journal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-brand-dark"
          >
            Paint & <span className="text-gradient">Colour</span> Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto font-light leading-relaxed"
          >
            Expert tips, colour inspiration, and product guides curated to help you transform your living spaces with confidence.
          </motion.p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white border-y border-brand-dark/5 sticky top-20 z-30 backdrop-blur-xl bg-white/80">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 ${
                  cat === 'All' 
                    ? 'bg-brand-dark text-white shadow-lg' 
                    : 'bg-brand-paper text-brand-muted hover:bg-brand-purple hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted/40" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-brand-paper border border-brand-dark/5 rounded-full px-14 py-4 focus:outline-none focus:border-brand-purple transition-all text-sm text-brand-dark placeholder:text-brand-muted/30"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <Link to="/blogs/1" className="group">
            <div className="bg-white rounded-[3rem] overflow-hidden border border-brand-dark/5 flex flex-col lg:flex-row shadow-sm hover:shadow-2xl transition-all duration-700">
              <div className="lg:w-3/5 h-[500px] overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-2/5 p-12 md:p-20 flex flex-col justify-center space-y-8">
                <span className="text-brand-purple font-bold tracking-[0.3em] uppercase text-[10px]">{blogPosts[0].category}</span>
                <h2 className="text-4xl md:text-5xl font-black text-brand-dark group-hover:text-brand-purple transition-colors leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-brand-muted text-lg leading-relaxed font-light">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted/40">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    {blogPosts[0].author}
                  </div>
                </div>
                <div className="pt-6">
                  <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-dark group-hover:gap-5 transition-all">
                    Read Full Article <ArrowRight className="w-4 h-4 text-brand-purple" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {blogPosts.slice(1).map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group"
              >
                <Link to={`/blogs/${post.id}`}>
                  <div className="h-80 overflow-hidden rounded-[2.5rem] mb-10 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-6 px-4">
                    <span className="text-brand-purple font-bold text-[10px] uppercase tracking-[0.3em]">{post.category}</span>
                    <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-purple transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-brand-muted text-sm line-clamp-3 leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-8 border-t border-brand-dark/5">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted/40">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark flex items-center gap-2 group-hover:gap-4 transition-all">
                        Read More <ChevronRight className="w-3 h-3 text-brand-purple" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark text-white rounded-[4rem] p-12 md:p-24 text-center space-y-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 blur-3xl rounded-full -mr-32 -mt-32" />
            <div className="space-y-6 relative z-10">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple">Stay Inspired</h2>
              <p className="text-4xl md:text-6xl font-black">Get Paint Tips in <br /><span className="text-gradient">Your Inbox</span></p>
            </div>
            <p className="text-white/40 max-w-2xl mx-auto relative z-10 font-light leading-relaxed">
              Subscribe to our journal for the latest colour trends, expert DIY tips, and exclusive offers from Shubham Colour House.
            </p>
            <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-6 relative z-10 pt-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow bg-white/5 border-b border-white/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-all text-sm placeholder:text-white/20"
              />
              <button className="btn-premium-gradient !px-12">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
