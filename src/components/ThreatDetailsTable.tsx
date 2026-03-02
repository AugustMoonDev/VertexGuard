import React from 'react';
import { Calendar, Smartphone, Bug, Folder, FileText } from 'lucide-react';

const threatDetails = [
  { date: '12-05-2024', deviceId: 'crazyfish228', virus: 'Code Red', path: 'C:/Users/opedi...', type: 'Jpeg' },
  { date: '11-05-2024', deviceId: 'angryswan732', virus: 'Stuxnet', path: '\\\\192.168.10.5\\...', type: 'Zip' },
  { date: '10-05-2024', deviceId: 'fasttiger991', virus: 'Conficker', path: 'D:/Data/System...', type: 'Exe' },
];

export const ThreatDetailsTable = () => {
  return (
    <div className="bg-card-dark border border-white/5 rounded-3xl p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Threat Details</h3>
        <select className="bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none">
          <option>Daily</option>
          <option>Weekly</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-text-muted border-b border-white/5">
              <th className="pb-4 font-semibold text-[11px] uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  Date
                </div>
              </th>
              <th className="pb-4 font-semibold text-[11px] uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5" />
                  Device ID
                </div>
              </th>
              <th className="pb-4 font-semibold text-[11px] uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Bug className="w-3.5 h-3.5" />
                  Virus name
                </div>
              </th>
              <th className="pb-4 font-semibold text-[11px] uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Folder className="w-3.5 h-3.5" />
                  File Path
                </div>
              </th>
              <th className="pb-4 font-semibold text-[11px] uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" />
                  File Type
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {threatDetails.map((row, i) => (
              <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                <td className="py-4 text-xs text-text-muted font-medium">{row.date}</td>
                <td className="py-4 text-xs text-white font-semibold">{row.deviceId}</td>
                <td className="py-4 text-xs text-white font-medium">{row.virus}</td>
                <td className="py-4 text-xs text-text-muted font-mono">{row.path}</td>
                <td className="py-4 text-xs text-text-muted">{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
