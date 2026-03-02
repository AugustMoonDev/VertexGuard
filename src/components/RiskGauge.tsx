import React from 'react';

export const RiskGauge = ({ score, level }: { score: number, level: string }) => {
  const percentage = (score / 1000) * 100;
  const strokeDasharray = 251.2; // 2 * pi * r (r=40)
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  return (
    <div className="bg-card-dark border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center relative h-full">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="text-sm font-bold text-white">Risk Score</h3>
        <button className="text-text-muted hover:text-white">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="relative w-40 h-40 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="12"
            strokeDasharray="440"
            strokeDashoffset="110" // Semi-circle
            strokeLinecap="round"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="12"
            strokeDasharray="440"
            strokeDashoffset={440 - (330 * percentage) / 100} // Adjust for semi-circle
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F27D26" />
              <stop offset="50%" stopColor="#9D4EDD" />
              <stop offset="100%" stopColor="#F72585" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
          <p className="text-[10px] text-text-muted uppercase tracking-widest font-semibold">Score</p>
          <span className="text-4xl font-bold text-white">{score}</span>
          <div className="mt-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full">
            <span className="text-[10px] font-bold text-orange-500 uppercase">{level}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full mt-2 px-4 text-[10px] text-text-muted font-bold">
        <span>0</span>
        <span>1000</span>
      </div>
    </div>
  );
};
