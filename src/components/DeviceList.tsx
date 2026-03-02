import React from 'react';
import { Smartphone, MoreVertical } from 'lucide-react';

const devices = [
  { id: 'crazyfish228', threats: 12, risk: 'High' },
  { id: 'angryswan732', threats: 5, risk: 'Medium' },
  { id: 'fasttiger991', threats: 2, risk: 'Low' },
];

export const DeviceList = () => {
  return (
    <div className="bg-card-dark border border-white/5 rounded-3xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Threat by device</h3>
        <button className="text-text-muted hover:text-white">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {devices.map((device) => (
          <div key={device.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-bg-dark flex items-center justify-center text-text-muted group-hover:text-white transition-colors">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Device ID</p>
                <p className="text-sm font-bold text-white">{device.id}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1.5 justify-end">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  device.risk === 'High' ? 'bg-accent-pink' : 
                  device.risk === 'Medium' ? 'bg-orange-500' : 'bg-emerald-500'
                }`}></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{device.threats} Threats</span>
              </div>
              <p className="text-[10px] text-text-muted font-medium mt-0.5">{device.risk} Risk</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
