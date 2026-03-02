import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, MessageSquare, Book, FileText, Search, ChevronRight, Mail, Phone, Globe, PlayCircle, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';
import { cn } from '../utils';

const categories = [
  { title: 'Getting Started', icon: PlayCircle, count: 12, color: 'text-accent-blue' },
  { title: 'Security Guides', icon: ShieldCheck, count: 24, color: 'text-accent-purple' },
  { title: 'API Documentation', icon: FileText, count: 18, color: 'text-emerald-500' },
  { title: 'Billing & Plans', icon: CreditCard, count: 8, color: 'text-accent-pink' },
];

export const HelpSupport = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12 pb-12"
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 border border-white/10 rounded-[40px] p-12 md:p-20 overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">How can we help you today?</h1>
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search for articles, guides, or troubleshooting..." 
              className="w-full bg-bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all shadow-2xl"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Popular:</span>
            {['Two-Factor Auth', 'API Keys', 'Billing', 'Threat Scanning'].map(tag => (
              <button key={tag} className="text-[10px] text-white/60 hover:text-white font-bold uppercase tracking-widest transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white">
                {tag}
              </button>
            ))}
          </div>
        </div>
        <HelpCircle className="absolute -right-20 -bottom-20 w-80 h-80 text-white/5 -rotate-12" />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-card-dark border border-white/5 rounded-3xl p-8 hover:border-accent-purple/30 transition-all group cursor-pointer"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/5 group-hover:scale-110 transition-transform", cat.color)}>
              <cat.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
            <p className="text-xs text-text-muted mb-4">{cat.count} articles available</p>
            <div className="flex items-center gap-2 text-[10px] text-accent-purple font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Explore <ArrowRight className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Featured Articles */}
        <div className="lg:col-span-8 space-y-8">
          <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Securing your API endpoints with VertexGuard', time: '5 min read', category: 'Security' },
              { title: 'Understanding the new Heuristic Engine v4', time: '8 min read', category: 'Updates' },
              { title: 'Best practices for multi-user collaboration', time: '4 min read', category: 'Workflow' },
              { title: 'Integrating with external SIEM tools', time: '12 min read', category: 'Advanced' },
            ].map((article, i) => (
              <div key={i} className="bg-card-dark border border-white/5 rounded-3xl p-6 hover:bg-white/[0.02] transition-all group cursor-pointer">
                <span className="text-[9px] text-accent-purple font-bold uppercase tracking-widest mb-3 block">{article.category}</span>
                <h4 className="text-sm font-bold text-white mb-4 group-hover:text-accent-purple transition-colors">{article.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-text-muted">{article.time}</span>
                  <ChevronRight className="w-3 h-3 text-text-muted group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-card-dark border border-white/5 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Still need help?</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group">
                <div className="w-10 h-10 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-purple group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">Live Chat</p>
                  <p className="text-[10px] text-text-muted">Available 24/7</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">Email Support</p>
                  <p className="text-[10px] text-text-muted">Response in 2h</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">Phone Support</p>
                  <p className="text-[10px] text-text-muted">For Enterprise only</p>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-accent-purple/10 border border-accent-purple/20 rounded-3xl p-8">
            <h4 className="text-sm font-bold text-white mb-2">Community Forum</h4>
            <p className="text-xs text-text-muted mb-4 leading-relaxed">Join 5,000+ security experts in our community forum to share tips and tricks.</p>
            <button className="text-[10px] text-accent-purple font-bold uppercase tracking-widest hover:underline">Visit Forum →</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
