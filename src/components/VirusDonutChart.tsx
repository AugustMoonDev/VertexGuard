import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'ILOVEYOU', value: 35, color: '#9D4EDD' },
  { name: 'Melissa', value: 25, color: '#F72585' },
  { name: 'MyDoom', value: 20, color: '#4361EE' },
  { name: 'Sasser', value: 20, color: '#4CC9F0' },
];

export const VirusDonutChart = () => {
  return (
    <div className="bg-card-dark border border-white/5 rounded-3xl p-6 h-[350px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Threats By Virus</h3>
        <button className="text-text-muted hover:text-white">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="flex-1 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={8}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#15161D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              itemStyle={{ fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
          <p className="text-[10px] text-text-muted uppercase font-bold">Total</p>
          <p className="text-2xl font-bold text-white">65%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
