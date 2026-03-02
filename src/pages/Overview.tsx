import React, { useState } from 'react';
import { StatCard } from '../components/StatCard';
import { RiskGauge } from '../components/RiskGauge';
import { ThreatSummary } from '../components/ThreatSummary';
import { VirusDonutChart } from '../components/VirusDonutChart';
import { ThreatDetailsTable } from '../components/ThreatDetailsTable';
import { DeviceList } from '../components/DeviceList';
import { Bug, Video, Image, FileText, Folder, Zap, ShieldCheck, Activity, Radar, TrendingUp, Target, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar as RadarArea, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { riskData as radarData } from '../data/mockData';

const barData = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 60 },
  { name: 'Thu', value: 80 },
  { name: 'Fri', value: 50 },
  { name: 'Sat', value: 90 },
  { name: 'Sun', value: 70 },
];

export const Overview = () => {
  const [timeRange, setTimeRange] = useState('Daily');

  return (
    <div className="space-y-8 pb-12">
      {/* Top Section: Stats & Gauge */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-9">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <h3 className="text-lg font-bold text-white">Current Risk Analysis</h3>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {['Daily', 'Weekly', 'Monthly'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all whitespace-nowrap ${
                    timeRange === range 
                      ? 'bg-accent-purple text-white' 
                      : 'bg-white/5 text-text-muted hover:bg-white/10'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {[
              { title: "Total Threats", value: "132%", label: "Total Threats", icon: Bug, color: "pink" as const },
              { title: "Video File Risk", value: "16%", label: "Video File Risk", icon: Video, color: "purple" as const },
              { title: "Image File Risk", value: "43%", label: "Image File Risk", icon: Image, color: "pink" as const },
              { title: "Docs File Risk", value: "7%", label: "Docs File Risk", icon: FileText, color: "blue" as const },
              { title: "Folder File Risk", value: "66%", label: "Folder File Risk", icon: Folder, color: "cyan" as const },
            ].map((stat, i) => (
              <motion.div 
                key={stat.title}
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="h-full"
          >
            <RiskGauge score={741} level="High" />
          </motion.div>
        </div>
      </div>

      {/* Modern Analysis Row */}
      <div className="grid grid-cols-12 gap-6">
        {/* Radar Analysis */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-card-dark border border-white/5 rounded-3xl p-6 h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Radar className="w-4 h-4 text-accent-purple" />
                <h3 className="text-sm font-bold text-white">Security Posture</h3>
              </div>
              <Target className="w-4 h-4 text-text-muted" />
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.05)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#8E9299', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <RadarArea
                    name="Security"
                    dataKey="A"
                    stroke="#9D4EDD"
                    fill="#9D4EDD"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Modern Bar Chart Analysis */}
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-card-dark border border-white/5 rounded-3xl p-6 h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent-blue" />
                <h3 className="text-sm font-bold text-white">Detection Velocity</h3>
              </div>
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">+14.2%</span>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#8E9299', fontSize: 10 }} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#15161D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 5 ? '#9D4EDD' : 'rgba(157, 78, 221, 0.2)'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Quick Actions / Insights */}
        <div className="col-span-12 lg:col-span-3 space-y-4">
          <div className="bg-gradient-to-br from-accent-purple to-accent-blue rounded-3xl p-6 text-white h-[190px] flex flex-col justify-between">
            <div>
              <ShieldCheck className="w-8 h-8 mb-4" />
              <h4 className="font-bold">System Health</h4>
              <p className="text-xs opacity-80">All core services are operational. No critical patches pending.</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest">v2.4.1 Stable</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="bg-card-dark border border-white/5 rounded-3xl p-6 h-[190px] flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-pink/10 rounded-xl flex items-center justify-center text-accent-pink">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Threat Alert</h4>
            </div>
            <p className="text-xs text-text-muted">New ransomware strain detected in global database. VertexGuard is already protected.</p>
            <button className="text-[10px] text-accent-purple font-bold uppercase tracking-widest hover:underline text-left">Read Analysis →</button>
          </div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <ThreatSummary />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <VirusDonutChart />
        </div>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <ThreatDetailsTable />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <DeviceList />
        </div>
      </div>
    </div>
  );
};
