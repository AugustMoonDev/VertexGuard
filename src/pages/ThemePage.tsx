import React from 'react';
import { motion } from 'motion/react';
import { Palette, Check, Terminal, Monitor, Ghost } from 'lucide-react';
import { cn } from '../utils';

const themes = [
  { id: 'default', name: 'Cyber Dark', desc: 'The classic VertexGuard look.', icon: Monitor, colors: ['#0B0C10', '#15161D', '#9D4EDD'] },
  { id: 'black-hacker', name: 'Deep Void', desc: 'Pure black for maximum focus.', icon: Terminal, colors: ['#000000', '#0a0a0a', '#ffffff'] },
  { id: 'green-hacker', name: 'Neon Ghost', desc: 'Classic hacker aesthetics.', icon: Ghost, colors: ['#020d02', '#051a05', '#00FF41'] },
  { id: 'matrix', name: 'Matrix Code', desc: 'Follow the white rabbit.', icon: Terminal, colors: ['#000000', '#001100', '#008f11'] },
];

export const ThemePage = () => {
  const [currentTheme, setCurrentTheme] = React.useState(document.documentElement.getAttribute('data-theme') || 'default');

  const applyTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    if (themeId === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', themeId);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-white">Interface Customization</h1>
        <p className="text-sm text-text-muted">Personalize your dashboard with specialized security themes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {themes.map((theme) => (
          <button 
            key={theme.id}
            onClick={() => applyTheme(theme.id)}
            className={cn(
              "bg-card-dark border rounded-3xl p-6 text-left transition-all group relative overflow-hidden",
              currentTheme === theme.id ? "border-accent-purple ring-2 ring-accent-purple/20" : "border-white/5 hover:border-white/20"
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={cn(
                "w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-colors",
                currentTheme === theme.id ? "text-accent-purple" : "text-text-muted group-hover:text-white"
              )}>
                <theme.icon className="w-6 h-6" />
              </div>
              {currentTheme === theme.id && (
                <div className="w-6 h-6 bg-accent-purple rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">{theme.name}</h3>
            <p className="text-xs text-text-muted mb-6 leading-relaxed">{theme.desc}</p>
            
            <div className="flex gap-2">
              {theme.colors.map((color, i) => (
                <div key={i} className="w-4 h-4 rounded-full border border-white/10" style={{ backgroundColor: color }} />
              ))}
            </div>

            {/* Preview Pattern */}
            <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <theme.icon className="w-24 h-24" />
            </div>
          </button>
        ))}
      </div>

      <div className="bg-card-dark border border-white/5 rounded-3xl p-8">
        <h3 className="text-lg font-bold text-white mb-6">Advanced Visuals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white">Glassmorphism Intensity</span>
              <span className="text-xs text-text-muted">High</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-accent-purple rounded-full"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white">Animation Speed</span>
              <span className="text-xs text-text-muted">Fast</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-accent-purple rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
