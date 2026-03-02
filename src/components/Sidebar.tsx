import React, { useState } from 'react';
import { 
  ShieldAlert, 
  LogOut,
  ChevronRight,
  Zap,
  X
} from 'lucide-react';
import { cn } from '../utils';
import { PageId } from '../types';
import { navItems } from '../data/navigation';

interface SidebarProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar = ({ activePage, onPageChange, isOpen, setIsOpen }: SidebarProps) => {
  const handleNavClick = (name: PageId) => {
    onPageChange(name);
    setIsOpen(false);
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed lg:sticky top-0 left-0 w-64 h-screen bg-bg-dark border-r border-white/5 flex flex-col z-[90] transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-purple rounded-lg flex items-center justify-center">
              <ShieldAlert className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">VertexGuard</h1>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden w-8 h-8 flex items-center justify-center text-text-muted hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 pb-6 custom-scrollbar">
          <div className="space-y-8">
            {navItems.map((group) => (
              <div key={group.group}>
                <p className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-4">
                  {group.group}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <button 
                        onClick={() => handleNavClick(item.name)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all group",
                          activePage === item.name 
                            ? "bg-accent-purple text-white shadow-lg shadow-accent-purple/20" 
                            : "text-text-muted hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className={cn("w-5 h-5", activePage === item.name ? "text-white" : "text-text-muted group-hover:text-white")} />
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                        {item.hasSub && <ChevronRight className="w-4 h-4 opacity-50" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div className="p-6 border-t border-white/5">
          <button 
            onClick={() => handleNavClick('Upgrade')}
            className="w-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 p-3 rounded-xl mb-4 border border-white/5 flex items-center gap-3 group hover:border-accent-purple/50 transition-all"
          >
            <div className="w-8 h-8 bg-accent-purple/30 rounded-lg flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-accent-purple" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-white uppercase tracking-wider">Upgrade</p>
              <p className="text-[9px] text-text-muted leading-tight">Unlock Pro Features</p>
            </div>
          </button>
          <button 
            onClick={() => handleNavClick('Logout')}
            className="w-full flex items-center gap-3 px-4 py-2 text-text-muted hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};
