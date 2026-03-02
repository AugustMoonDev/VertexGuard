import React from 'react';
import { MoreVertical } from 'lucide-react';
import { cn } from '../utils';

interface StatCardProps {
  title: string;
  value: string;
  label: string;
  icon: React.ElementType;
  color: 'purple' | 'pink' | 'blue' | 'cyan' | 'indigo';
}

const colorMap = {
  purple: 'bg-accent-purple text-white',
  pink: 'bg-accent-pink text-white',
  blue: 'bg-accent-blue text-white',
  cyan: 'bg-cyan-500 text-white',
  indigo: 'bg-indigo-600 text-white',
};

export const StatCard = ({ title, value, label, icon: Icon, color }: StatCardProps) => {
  return (
    <div className="bg-card-dark border border-white/5 rounded-3xl p-5 flex flex-col gap-4 relative overflow-hidden group hover:border-white/10 transition-all">
      <div className="flex items-center justify-between">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", colorMap[color])}>
          <Icon className="w-5 h-5" />
        </div>
        <button className="text-text-muted hover:text-white">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-white mb-0.5">{value}</h3>
        <p className="text-[10px] text-text-muted font-medium uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
};
