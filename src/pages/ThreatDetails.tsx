import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, MapPin, Cpu, Globe, ExternalLink, ShieldCheck, AlertCircle, Activity, Zap, Server, Database } from 'lucide-react';
import { cn } from '../utils';

const detailedThreats = [
  { id: 'TH-992', virus: 'WannaCry 2.0', origin: 'Russia', target: 'Finance Server', severity: 'Critical', status: 'Blocked', time: '10:20 AM', ip: '185.12.4.99', riskScore: 940 },
  { id: 'TH-991', virus: 'Emotet Payload', origin: 'Unknown', target: 'User Endpoint', severity: 'High', status: 'Quarantined', time: '09:45 AM', ip: '45.12.3.1', riskScore: 820 },
  { id: 'TH-990', virus: 'Adware.Generic', origin: 'USA', target: 'Marketing PC', severity: 'Low', status: 'Cleaned', time: '08:15 AM', ip: '12.44.1.2', riskScore: 120 },
];

export const ThreatDetails = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 pb-12"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-accent-blue/10 text-accent-blue text-[10px] font-bold rounded uppercase tracking-widest">Intelligence Feed</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Threat Intelligence</h1>
          <p className="text-sm text-text-muted mt-1">Deep heuristic analysis and global origin tracking for system threats.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all">
            <Activity className="w-4 h-4" /> Live Feed
          </button>
          <button className="flex items-center gap-2 bg-accent-purple text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-accent-purple/30">
            <Globe className="w-4 h-4" /> Global Map
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Intelligence Feed */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {detailedThreats.map((threat) => (
            <div key={threat.id} className="bg-card-dark border border-white/5 rounded-3xl overflow-hidden group hover:border-accent-purple/30 transition-all">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div className="flex items-center gap-5">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg",
                      threat.severity === 'Critical' ? 'bg-accent-pink/20 text-accent-pink shadow-accent-pink/10' : 'bg-accent-blue/20 text-accent-blue shadow-accent-blue/10'
                    )}>
                      <ShieldAlert className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-xl font-bold text-white">{threat.virus}</h4>
                        <span className={cn(
                          "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider",
                          threat.status === 'Blocked' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-accent-purple/10 text-accent-purple'
                        )}>
                          {threat.status}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted font-mono">ID: {threat.id} • Detected at {threat.time} • Source IP: {threat.ip}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest mb-1">Risk Score</p>
                    <p className={cn(
                      "text-3xl font-bold",
                      threat.riskScore > 800 ? 'text-accent-pink' : 'text-emerald-500'
                    )}>{threat.riskScore}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-text-muted">
                      <MapPin className="w-4 h-4" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Origin Location</span>
                    </div>
                    <p className="text-sm font-bold text-white">{threat.origin}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-text-muted">
                      <Server className="w-4 h-4" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Target System</span>
                    </div>
                    <p className="text-sm font-bold text-white">{threat.target}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-text-muted">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Heuristic Match</span>
                    </div>
                    <p className="text-sm font-bold text-white">99.2% Certainty</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/[0.02] p-4 flex justify-between items-center border-t border-white/5">
                <div className="flex gap-4">
                  <button className="text-[10px] text-text-muted font-bold uppercase tracking-widest hover:text-white transition-colors">View Payload</button>
                  <button className="text-[10px] text-text-muted font-bold uppercase tracking-widest hover:text-white transition-colors">Trace Route</button>
                </div>
                <button className="text-[10px] text-accent-purple font-bold uppercase tracking-widest hover:underline">Full Analysis Report →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Intelligence Sidebar */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-card-dark border border-white/5 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-5 h-5 text-accent-purple" />
              <h3 className="font-bold text-white">AI Recommendations</h3>
            </div>
            <div className="space-y-6">
              {[
                { title: 'Endpoint Isolation', desc: 'Isolate Marketing PC immediately to prevent lateral movement.', action: 'Isolate Now' },
                { title: 'Credential Rotation', desc: 'Compromised hash detected. Rotate all Finance Group passwords.', action: 'Rotate All' },
                { title: 'Patch Deployment', desc: 'Critical patch v2.4.1 fixes the vulnerability used in TH-992.', action: 'Deploy Patch' },
              ].map((rec, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <h4 className="text-xs font-bold text-white">{rec.title}</h4>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{rec.desc}</p>
                  <button className="text-[10px] text-accent-purple font-bold uppercase tracking-widest hover:underline">{rec.action}</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-purple to-accent-blue rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">Global Threat Network</h3>
              <p className="text-xs opacity-80 mb-6 leading-relaxed">Connect to the VertexGuard Global Network to receive zero-day alerts 15 minutes before they hit the general database.</p>
              <button className="w-full bg-white text-accent-purple py-3 rounded-xl text-xs font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                Join Network <ExternalLink className="w-3 h-3" />
              </button>
            </div>
            <Globe className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10 group-hover:opacity-20 transition-all" />
          </div>

          <div className="bg-card-dark border border-white/5 rounded-3xl p-8">
            <h3 className="font-bold text-white mb-6">System Integrity</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
                <span className="text-text-muted">Database Sync</span>
                <span className="text-emerald-500">Synced</span>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
                <span className="text-text-muted">Heuristic Engine</span>
                <span className="text-white">v4.2.0</span>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
                <span className="text-text-muted">Last Global Update</span>
                <span className="text-white">4m ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
