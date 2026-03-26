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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-brand-blue text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled-1.webp"
            alt="Blogs Hero"
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-brand-blue/30 to-brand-blue/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Paint & Colour Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light"
          >
            Expert tips, colour inspiration, and product guides to help you transform your home.
          </motion.p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  cat === 'All' ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full px-12 py-3 focus:outline-none focus:border-brand-blue"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link to="/blogs/1" className="group">
            <div className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-[400px] overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-1/2 p-12 flex flex-col justify-center space-y-6">
                <span className="text-brand-blue font-bold tracking-widest uppercase text-xs">{blogPosts[0].category}</span>
                <h2 className="text-4xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                </div>
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:gap-4 transition-all">
                    Read Full Article <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.slice(1).map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 group"
              >
                <Link to={`/blogs/${post.id}`}>
                  <div className="h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">{post.category}</span>
                    <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span className="text-brand-blue font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ChevronRight className="w-4 h-4" />
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark text-white rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/5 -skew-y-6 transform translate-y-1/2" />
            <h2 className="text-4xl font-bold relative z-10">Get Paint Tips in Your Inbox</h2>
            <p className="text-gray-400 max-w-2xl mx-auto relative z-10">
              Subscribe to our newsletter for the latest colour trends, DIY tips, and exclusive offers from Shubham Colour House.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow bg-white/10 border border-white/20 rounded-full px-8 py-4 focus:outline-none focus:border-brand-blue transition-colors"
              />
              <button className="btn-premium bg-brand-blue text-white !px-12 !py-5">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
