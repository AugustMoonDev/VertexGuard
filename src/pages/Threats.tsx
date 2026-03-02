import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, BarChart3, TrendingUp, Target, Zap, Shield, Activity, ArrowUpRight, Search, Filter, Bug, ArrowDownRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { cn } from '../utils';

const threatData = [
  { name: 'Phishing', count: 450, color: '#F72585' },
  { name: 'Malware', count: 320, color: '#7209B7' },
  { name: 'DDoS', count: 280, color: '#3A0CA3' },
  { name: 'SQLi', count: 190, color: '#4361EE' },
  { name: 'XSS', count: 150, color: '#4CC9F0' },
];

const threats = [
  { name: 'Trojan.Win32.Generic', count: 1240, trend: '+12%', status: 'Active' },
  { name: 'Ransom.WannaCry', count: 45, trend: '-5%', status: 'Blocked' },
  { name: 'Phish.Office365', count: 890, trend: '+24%', status: 'Active' },
  { name: 'Spyware.Keylogger', count: 12, trend: '0%', status: 'Quarantined' },
];

export const Threats = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 pb-12"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-accent-pink/10 text-accent-pink text-[10px] font-bold rounded uppercase tracking-widest">Threat Landscape</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Attack Vectors</h1>
          <p className="text-sm text-text-muted mt-1">Real-time analysis of incoming threat patterns and defensive performance.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input type="text" placeholder="Search vectors..." className="bg-card-dark border border-white/5 rounded-xl py-2 pl-10 pr-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-accent-purple w-48" />
          </div>
          <button className="bg-white/5 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all hover:bg-white/10 flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Chart Bento */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-card-dark border border-white/5 rounded-3xl p-8 h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-accent-pink" />
                <h3 className="font-bold text-white">Top Attack Vectors</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-pink"></div>
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">High Risk</span>
                </div>
                <select className="bg-white/5 border-none text-[10px] text-white font-bold uppercase tracking-widest focus:ring-0 cursor-pointer rounded-lg px-2 py-1">
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>Last 24 Hours</option>
                </select>
              </div>
            </div>
            
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={threatData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: 600 }}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#15161D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Bar dataKey="count" radius={[6, 6, 0, 0]} barSize={40}>
                    {threatData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Side Stats */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 border border-white/10 rounded-3xl p-8 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent-pink/20 rounded-2xl flex items-center justify-center text-accent-pink">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-accent-pink text-[10px] font-bold">
                <ArrowUpRight className="w-3 h-3" /> +12%
              </div>
            </div>
            <div>
              <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest mb-1">Total Threats</p>
              <h3 className="text-4xl font-bold text-white">1,390</h3>
            </div>
          </div>

          <div className="bg-card-dark border border-white/5 rounded-3xl p-8 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent-blue/20 rounded-2xl flex items-center justify-center text-accent-blue">
                <Target className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-emerald-500 text-[10px] font-bold">
                <TrendingUp className="w-3 h-3" /> 99.9%
              </div>
            </div>
            <div>
              <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest mb-1">Defensive Accuracy</p>
              <h3 className="text-4xl font-bold text-white">High</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {threats.map((threat, i) => (
          <div key={i} className="bg-card-dark border border-white/5 rounded-3xl p-6 hover:border-accent-purple/30 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-purple">
                <Bug className="w-5 h-5" />
              </div>
              <span className={cn(
                "text-[10px] font-bold px-2 py-1 rounded-lg",
                threat.status === 'Active' ? 'bg-accent-pink/10 text-accent-pink' : 'bg-emerald-500/10 text-emerald-500'
              )}>
                {threat.status}
              </span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1 group-hover:text-accent-purple transition-colors">{threat.name}</h4>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{threat.count.toLocaleString()}</p>
                <p className="text-[10px] text-text-muted uppercase font-bold">Detections</p>
              </div>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-bold",
                threat.trend.startsWith('+') ? 'text-accent-pink' : threat.trend === '0%' ? 'text-text-muted' : 'text-emerald-500'
              )}>
                {threat.trend.startsWith('+') ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {threat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Analysis Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Zero-Day Vulnerabilities', value: '2 Active', icon: Zap, color: 'text-yellow-500', desc: 'Unpatched vulnerabilities detected in core system modules.' },
          { title: 'Defensive Posture', value: 'Optimized', icon: Shield, color: 'text-emerald-500', desc: 'All firewall rules and endpoint protections are up to date.' },
          { title: 'Network Latency', value: '14ms', icon: Activity, color: 'text-accent-blue', desc: 'System performance remains stable under current threat load.' },
        ].map((item, i) => (
          <div key={i} className="bg-card-dark border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all group">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-6 bg-white/5", item.color)}>
              <item.icon className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
            <p className={cn("text-lg font-bold mb-3", item.color)}>{item.value}</p>
            <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-card-dark border border-white/5 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h3 className="font-bold text-white">Recent Attack Attempts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-text-muted border-b border-white/5">
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider">Source IP</th>
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider">Vector</th>
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider">Target</th>
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider">Severity</th>
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider">Action Taken</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { ip: '192.168.1.105', vector: 'Brute Force', target: 'Admin Portal', severity: 'High', action: 'IP Blacklisted' },
                { ip: '45.12.3.1', vector: 'SQL Injection', target: 'User DB', severity: 'Critical', action: 'Request Dropped' },
                { ip: '10.0.0.42', vector: 'XSS Payload', target: 'Support Chat', severity: 'Medium', action: 'Sanitized' },
              ].map((log, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 text-xs text-white font-mono">{log.ip}</td>
                  <td className="p-6 text-xs text-white font-bold">{log.vector}</td>
                  <td className="p-6 text-xs text-text-muted">{log.target}</td>
                  <td className="p-6">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border",
                      log.severity === 'Critical' ? 'text-accent-pink border-accent-pink/20 bg-accent-pink/10' :
                      log.severity === 'High' ? 'text-orange-500 border-orange-500/20 bg-orange-500/10' :
                      'text-yellow-500 border-yellow-500/20 bg-yellow-500/10'
                    )}>
                      {log.severity}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{log.action}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
