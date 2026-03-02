import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Files, Search, Filter, HardDrive, ShieldCheck, ShieldAlert, MoreVertical, Download, Trash2, Eye, Upload, PieChart as PieIcon, ArrowUpRight } from 'lucide-react';
import { cn } from '../utils';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { mockFiles as files, threatSummary as storageData } from '../data/mockData';

export const FilesPage = () => {
  const [search, setSearch] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 pb-12"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">File Repository</h1>
          <p className="text-sm text-text-muted mt-1">Secure storage and automated threat scanning for all system assets.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all">
            <Download className="w-4 h-4" /> Export All
          </button>
          <button className="flex items-center gap-2 bg-accent-purple text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-accent-purple/30">
            <Upload className="w-4 h-4" /> Upload File
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Storage Analytics Bento */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-card-dark border border-white/5 rounded-3xl p-8 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <PieIcon className="w-4 h-4 text-accent-purple" />
                <h3 className="text-sm font-bold text-white">Storage Analysis</h3>
              </div>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">45.2 GB Total</span>
            </div>
            
            <div className="flex-1 min-h-[200px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={storageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {storageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#15161D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
                <p className="text-[10px] text-text-muted uppercase font-bold">Used</p>
                <p className="text-2xl font-bold text-white">78%</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {storageData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card-dark border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-accent-blue/30 transition-all">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-accent-blue mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">1,232</h3>
              <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest">Safe Files</p>
            </div>
          </div>
          <div className="bg-card-dark border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-accent-pink/30 transition-all">
            <div className="w-12 h-12 bg-accent-pink/10 rounded-2xl flex items-center justify-center text-accent-pink mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">8</h3>
              <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest">Threats Blocked</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-4">
              <HardDrive className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">92%</h3>
              <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest">Health Score</p>
            </div>
          </div>
        </div>
      </div>

      {/* File Browser Area */}
      <div className="bg-card-dark border border-white/5 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search by name, type, or status..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-accent-purple"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-text-muted border-b border-white/5">
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider">Asset Name</th>
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider">Size</th>
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider">Type</th>
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider">Last Scan</th>
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider">Security Status</th>
                <th className="p-6 font-semibold text-[11px] uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {files.filter(f => f.name.toLowerCase().includes(search.toLowerCase())).map((file) => (
                <tr key={file.id} className="group hover:bg-white/[0.02] transition-all">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-accent-purple/10 transition-colors">
                        <Files className="w-5 h-5 text-text-muted group-hover:text-accent-purple" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-accent-purple transition-colors">{file.name}</p>
                        <p className="text-[10px] text-text-muted font-mono">ID: {file.id.padStart(4, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-xs text-text-muted font-medium">{file.size}</td>
                  <td className="p-6">
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-text-muted font-mono uppercase">{file.type}</span>
                  </td>
                  <td className="p-6 text-xs text-text-muted">{file.lastScanned}</td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        file.threatLevel === 'Safe' ? 'bg-emerald-500' :
                        file.threatLevel === 'Suspicious' ? 'bg-yellow-500' : 'bg-accent-pink animate-pulse'
                      )}></div>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-wider",
                        file.threatLevel === 'Safe' ? 'text-emerald-500' :
                        file.threatLevel === 'Suspicious' ? 'text-yellow-500' : 'text-accent-pink'
                      )}>
                        {file.threatLevel}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 hover:bg-white/5 rounded-lg text-text-muted hover:text-white transition-all"><Eye className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-white/5 rounded-lg text-text-muted hover:text-white transition-all"><Download className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-white/5 rounded-lg text-text-muted hover:text-accent-pink transition-all"><Trash2 className="w-4 h-4" /></button>
                    </div>
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
