import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Jan', threats: 210 },
  { name: 'Feb', threats: 280 },
  { name: 'Mar', threats: 240 },
  { name: 'Apr', threats: 320 },
  { name: 'May', threats: 290 },
  { name: 'Jun', threats: 410 },
  { name: 'Jul', threats: 350 },
  { name: 'Aug', threats: 380 },
  { name: 'Sep', threats: 310 },
  { name: 'Oct', threats: 340 },
  { name: 'Nov', threats: 280 },
  { name: 'Dec', threats: 320 },
];

export const ThreatSummary = () => {
  return (
    <div className="bg-card-dark border border-white/5 rounded-3xl p-6 h-[350px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Threat Summary</h3>
        <select className="bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none">
          <option>Yearly</option>
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>

      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9D4EDD" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#9D4EDD" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#8E9299', fontSize: 10 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#8E9299', fontSize: 10 }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#15161D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              itemStyle={{ color: '#9D4EDD', fontSize: '12px', fontWeight: 'bold' }}
              labelStyle={{ color: '#fff', marginBottom: '4px', fontSize: '10px' }}
            />
            <Area 
              type="monotone" 
              dataKey="threats" 
              stroke="#9D4EDD" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorThreats)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
