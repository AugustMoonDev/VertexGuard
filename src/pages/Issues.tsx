import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle, Clock, ShieldAlert, Filter, Download, Search, MoreHorizontal, ArrowUpRight } from 'lucide-react';
import { cn } from '../utils';
import { mockIssues as issues } from '../data/mockData';

const severityStyles = {
  Critical: 'text-accent-pink bg-accent-pink/10 border-accent-pink/20 shadow-[0_0_15px_rgba(247,37,133,0.1)]',
  High: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
  Medium: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
  Low: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
};

export const Issues = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 pb-12"
    >
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-accent-purple/10 text-accent-purple text-[10px] font-bold rounded uppercase tracking-widest">Security Center</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Active Incidents</h1>
          <p className="text-sm text-text-muted mt-1">Real-time monitoring and resolution of system vulnerabilities.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input type="text" placeholder="Search incidents..." className="bg-card-dark border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-accent-purple w-full" />
          </div>
          <button className="bg-accent-purple text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all hover:shadow-lg hover:shadow-accent-purple/30 whitespace-nowrap">
            Create Report
          </button>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest mb-2">System Status</p>
            <h3 className="text-3xl font-bold text-white mb-4">Critical Threats Detected</h3>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-bg-dark" referrerPolicy="no-referrer" />
                ))}
              </div>
              <p className="text-xs text-white/80">3 analysts are currently investigating</p>
            </div>
          </div>
          <ShieldAlert className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:text-white/10 transition-all rotate-12" />
        </div>

        <div className="bg-card-dark border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest mb-1">Open Issues</p>
            <h3 className="text-4xl font-bold text-white">12</h3>
          </div>
          <div className="flex items-center gap-2 text-accent-pink text-[10px] font-bold">
            <ArrowUpRight className="w-3 h-3" /> +2 since last hour
          </div>
        </div>

        <div className="bg-card-dark border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest mb-1">Resolved</p>
            <h3 className="text-4xl font-bold text-white">156</h3>
          </div>
          <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-bold">
            <CheckCircle className="w-3 h-3" /> 98% success rate
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-card-dark border border-white/5 rounded-3xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h3 className="font-bold text-white">Incident Log</h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/5 rounded-lg text-text-muted"><Filter className="w-4 h-4" /></button>
                <button className="p-2 hover:bg-white/5 rounded-lg text-text-muted"><Download className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="divide-y divide-white/5">
              {issues.map((issue) => (
                <div key={issue.id} className="p-6 hover:bg-white/[0.02] transition-all group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={cn("px-2 py-0.5 rounded text-[9px] font-bold border uppercase tracking-wider", severityStyles[issue.severity as keyof typeof severityStyles])}>
                          {issue.severity}
                        </span>
                        <span className="text-[10px] text-text-muted font-mono">{issue.id}</span>
                        <span className="text-[10px] text-accent-blue font-bold uppercase tracking-widest">{issue.category}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1 group-hover:text-accent-purple transition-colors">{issue.title}</h4>
                      <p className="text-xs text-text-muted leading-relaxed line-clamp-1">{issue.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-text-muted font-mono mb-2">{issue.timestamp}</p>
                      <div className="flex items-center justify-end gap-2">
                        <span className={cn(
                          "w-2 h-2 rounded-full",
                          issue.status === 'Open' ? 'bg-accent-pink animate-pulse' : 
                          issue.status === 'In Progress' ? 'bg-yellow-500' : 'bg-emerald-500'
                        )}></span>
                        <span className="text-[10px] font-bold text-white uppercase">{issue.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 text-[10px] text-text-muted font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
              View All Incidents
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-card-dark border border-white/5 rounded-3xl p-6">
            <h3 className="font-bold text-white mb-6">Analyst Activity</h3>
            <div className="space-y-6">
              {[
                { name: 'System Admin', action: 'Resolved ISS-004', time: '12m ago', img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop' },
                { name: 'Guy Hawkins', action: 'Started investigation on ISS-002', time: '45m ago', img: 'https://picsum.photos/seed/2/40/40' },
                { name: 'Jane Cooper', action: 'Flagged suspicious IP 192.168.1.1', time: '1h ago', img: 'https://picsum.photos/seed/3/40/40' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4">
                  <img src={activity.img} className="w-8 h-8 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-white">{activity.name}</p>
                    <p className="text-[10px] text-text-muted">{activity.action}</p>
                  </div>
                  <span className="text-[9px] text-text-muted font-mono">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent-purple/10 border border-accent-purple/20 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-5 h-5 text-accent-purple" />
              <h4 className="text-sm font-bold text-white">Security Tip</h4>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">Always verify the source IP before whitelisting any firewall rules. 80% of breaches occur due to misconfigured access controls.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
