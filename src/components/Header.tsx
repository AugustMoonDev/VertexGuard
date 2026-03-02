import React, { useState } from 'react';
import { Search, Bell, MessageSquare, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const notifications = [
    { id: 1, text: 'New threat detected on Device X', time: '2m ago', type: 'alert' },
    { id: 2, text: 'System scan completed', time: '1h ago', type: 'info' },
    { id: 3, text: 'Security patch available', time: '3h ago', type: 'update' },
  ];

  const messages = [
    { id: 1, from: 'Security Bot', text: 'Daily report is ready', time: '10:30 AM' },
    { id: 2, from: 'System Admin', text: 'Please review the new firewall rules', time: 'Yesterday' },
  ];

  return (
    <header className="flex items-center justify-between mb-6 py-2 gap-4 transition-all">
      <div className="flex items-center gap-3 shrink-0">
        <button 
          onClick={onMenuClick}
          className="relative group focus:outline-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
            alt="User" 
            className="w-10 h-10 rounded-xl border border-white/10 shadow-lg object-cover group-hover:border-accent-purple transition-all"
            referrerPolicy="no-referrer"
          />
          <div className="lg:hidden absolute -bottom-1 -right-1 w-4 h-4 bg-accent-purple rounded-full flex items-center justify-center border-2 border-bg-dark">
            <Menu className="w-2 h-2 text-white" />
          </div>
        </button>
        <div className="hidden sm:block min-w-0">
          <h2 className="text-sm font-bold text-white whitespace-nowrap">Hi, Admin</h2>
          <p className="text-[10px] text-text-muted">Secure Session</p>
        </div>
      </div>

      <div className="flex-1 max-w-md">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted group-focus-within:text-accent-purple transition-colors" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..." 
            className="w-full bg-card-dark border border-white/5 rounded-xl py-2 pl-9 pr-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-accent-purple/50 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className="relative">
          <button 
            onClick={() => {
              setShowMessages(!showMessages);
              setShowNotifications(false);
            }}
            className="w-9 h-9 rounded-xl bg-card-dark border border-white/5 flex items-center justify-center text-text-muted hover:text-white transition-all hover:border-accent-purple/30"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
          <AnimatePresence>
            {showMessages && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-3 w-64 bg-card-dark border border-white/10 rounded-2xl shadow-2xl p-4 backdrop-blur-xl z-[100]"
              >
                <h4 className="text-xs font-bold mb-3">Messages</h4>
                <div className="space-y-3">
                  {messages.map(m => (
                    <div key={m.id} className="p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                      <p className="text-[10px] font-bold text-white">{m.from}</p>
                      <p className="text-[9px] text-text-muted line-clamp-1">{m.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowMessages(false);
            }}
            className="w-9 h-9 rounded-xl bg-card-dark border border-white/5 flex items-center justify-center text-text-muted hover:text-white transition-all hover:border-accent-purple/30 relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent-pink rounded-full border-2 border-card-dark"></span>
          </button>
          <AnimatePresence>
            {showNotifications && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-3 w-64 bg-card-dark border border-white/10 rounded-2xl shadow-2xl p-4 backdrop-blur-xl z-[100]"
              >
                <h4 className="text-xs font-bold mb-3">Notifications</h4>
                <div className="space-y-3">
                  {notifications.map(n => (
                    <div key={n.id} className="p-2 hover:bg-white/5 rounded-lg cursor-pointer flex gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${n.type === 'alert' ? 'bg-accent-pink' : 'bg-accent-blue'}`} />
                      <div>
                        <p className="text-[10px] text-white">{n.text}</p>
                        <span className="text-[8px] text-text-muted">{n.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
