import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Shield, Bell, Globe, Lock, Database, 
  RefreshCw, Save, Smartphone, Mail, Key, 
  Eye, EyeOff, Server, HardDrive, Share2, 
  Activity, Zap, ShieldCheck, ShieldAlert
} from 'lucide-react';
import { cn } from '../utils';

type SettingSection = 'profile' | 'security' | 'notifications' | 'network' | 'access' | 'data';

export const Settings = () => {
  const [activeSection, setActiveSection] = useState<SettingSection>('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
              <div className="relative group shrink-0">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop" className="w-24 h-24 rounded-[32px] border-2 border-white/10 group-hover:border-accent-purple transition-all object-cover" referrerPolicy="no-referrer" />
                <button className="absolute -bottom-2 -right-2 bg-accent-purple text-white p-2 rounded-xl shadow-xl hover:scale-110 transition-transform">
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-bold text-white">System Admin</h4>
                <p className="text-xs text-text-muted">Security Administrator • Level 4 Access</p>
                <p className="text-[10px] text-accent-purple font-bold uppercase tracking-widest mt-2">Member since May 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-text-muted uppercase font-bold tracking-widest ml-1">Full Name</label>
                <input type="text" defaultValue="System Admin" className="w-full bg-card-dark border border-white/5 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent-purple transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-text-muted uppercase font-bold tracking-widest ml-1">Email Address</label>
                <input type="email" defaultValue="admin@vertexguard.com" className="w-full bg-card-dark border border-white/5 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent-purple transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-text-muted uppercase font-bold tracking-widest ml-1">Role</label>
                <input type="text" defaultValue="Lead Security Engineer" className="w-full bg-card-dark border border-white/5 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent-purple transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-text-muted uppercase font-bold tracking-widest ml-1">Timezone</label>
                <select className="w-full bg-card-dark border border-white/5 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent-purple transition-all">
                  <option>UTC -08:00 (Pacific Time)</option>
                  <option>UTC +00:00 (GMT)</option>
                  <option>UTC +06:30 (Myanmar)</option>
                </select>
              </div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="space-y-4">
              {[
                { label: 'Two-Factor Authentication', desc: 'Add an extra layer of security to your account.', icon: Smartphone, enabled: true },
                { label: 'Biometric Login', desc: 'Use fingerprint or face recognition for faster access.', icon: Lock, enabled: false },
                { label: 'Session Timeout', desc: 'Automatically log out after 30 minutes of inactivity.', icon: Activity, enabled: true },
              ].map((setting) => (
                <div key={setting.label} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 bg-card-dark border border-white/5 rounded-2xl group hover:border-white/10 transition-all gap-4">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className={cn("w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all shrink-0", setting.enabled ? "bg-accent-purple/10 text-accent-purple" : "bg-white/5 text-text-muted")}>
                      <setting.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{setting.label}</h4>
                      <p className="text-xs text-text-muted mt-0.5">{setting.desc}</p>
                    </div>
                  </div>
                  <button className={cn("w-12 h-6 rounded-full relative transition-all self-end sm:self-auto", setting.enabled ? "bg-accent-purple" : "bg-white/10")}>
                    <div className={cn("absolute top-1 w-4 h-4 bg-white rounded-full transition-all", setting.enabled ? "right-1" : "left-1")}></div>
                  </button>
                </div>
              ))}
            </div>
            <div className="p-5 sm:p-6 bg-accent-pink/5 border border-accent-pink/20 rounded-2xl">
              <h4 className="text-sm font-bold text-white mb-2">Password Management</h4>
              <p className="text-xs text-text-muted mb-4">Last changed 45 days ago. We recommend changing it every 90 days.</p>
              <button className="px-4 py-2 bg-accent-pink/10 text-accent-pink border border-accent-pink/20 rounded-xl text-xs font-bold hover:bg-accent-pink hover:text-white transition-all">Update Password</button>
            </div>
          </motion.div>
        );
      case 'notifications':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="space-y-4">
              {[
                { label: 'Critical Threat Alerts', desc: 'Instant push notifications for severe system breaches.', icon: ShieldAlert, enabled: true },
                { label: 'Daily Security Summary', desc: 'Receive a daily email report of all system activities.', icon: Mail, enabled: true },
                { label: 'Device Login Alerts', desc: 'Notify when a new device logs into your admin account.', icon: Smartphone, enabled: true },
                { id: 'marketing', label: 'Product Updates', desc: 'Stay informed about new features and security patches.', icon: Zap, enabled: false },
              ].map((setting) => (
                <div key={setting.label} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 bg-card-dark border border-white/5 rounded-2xl group hover:border-white/10 transition-all gap-4">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className={cn("w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all shrink-0", setting.enabled ? "bg-accent-purple/10 text-accent-purple" : "bg-white/5 text-text-muted")}>
                      <setting.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{setting.label}</h4>
                      <p className="text-xs text-text-muted mt-0.5">{setting.desc}</p>
                    </div>
                  </div>
                  <button className={cn("w-12 h-6 rounded-full relative transition-all self-end sm:self-auto", setting.enabled ? "bg-accent-purple" : "bg-white/10")}>
                    <div className={cn("absolute top-1 w-4 h-4 bg-white rounded-full transition-all", setting.enabled ? "right-1" : "left-1")}></div>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'network':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-card-dark border border-white/5 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-accent-blue" />
                  <h4 className="text-sm font-bold text-white">Proxy Configuration</h4>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase font-bold">Proxy Server</label>
                    <input type="text" defaultValue="proxy.vertexguard.internal" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-accent-purple" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase font-bold">Port</label>
                    <input type="text" defaultValue="8080" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-accent-purple" />
                  </div>
                </div>
              </div>
              <div className="bg-card-dark border border-white/5 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-5 h-5 text-accent-purple" />
                  <h4 className="text-sm font-bold text-white">DNS Settings</h4>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase font-bold">Primary DNS</label>
                    <input type="text" defaultValue="1.1.1.1" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-accent-purple" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-muted uppercase font-bold">Secondary DNS</label>
                    <input type="text" defaultValue="8.8.8.8" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-accent-purple" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'access':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="bg-card-dark border border-white/5 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h4 className="text-sm font-bold text-white">Role-Based Access Control (RBAC)</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[500px]">
                  <thead>
                    <tr className="text-[10px] text-text-muted uppercase tracking-widest border-b border-white/5">
                      <th className="px-6 py-4 font-bold">User Group</th>
                      <th className="px-6 py-4 font-bold">Permissions</th>
                      <th className="px-6 py-4 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { group: 'Super Admins', perms: 'Full System Access', status: 'Active' },
                      { group: 'Security Analysts', perms: 'Read/Write Logs, Scan', status: 'Active' },
                      { group: 'IT Support', perms: 'Read Only, Reset Passwords', status: 'Restricted' },
                    ].map((row, i) => (
                      <tr key={i} className="text-xs text-white">
                        <td className="px-6 py-4 font-bold">{row.group}</td>
                        <td className="px-6 py-4 text-text-muted">{row.perms}</td>
                        <td className="px-6 py-4">
                          <span className={cn("px-2 py-0.5 rounded-full text-[9px] font-bold uppercase", row.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-accent-pink/10 text-accent-pink')}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        );
      case 'data':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-card-dark border border-white/5 rounded-2xl p-6 text-center">
                <HardDrive className="w-8 h-8 text-accent-blue mx-auto mb-4" />
                <h4 className="text-sm font-bold text-white">Log Retention</h4>
                <p className="text-2xl font-bold text-white mt-2">90 Days</p>
                <p className="text-[10px] text-text-muted uppercase font-bold mt-1">Current Policy</p>
              </div>
              <div className="bg-card-dark border border-white/5 rounded-2xl p-6 text-center">
                <Database className="w-8 h-8 text-accent-purple mx-auto mb-4" />
                <h4 className="text-sm font-bold text-white">DB Optimization</h4>
                <p className="text-2xl font-bold text-white mt-2">Weekly</p>
                <p className="text-[10px] text-text-muted uppercase font-bold mt-1">Auto-Schedule</p>
              </div>
              <div className="bg-card-dark border border-white/5 rounded-2xl p-6 text-center sm:col-span-2 md:col-span-1">
                <Share2 className="w-8 h-8 text-accent-pink mx-auto mb-4" />
                <h4 className="text-sm font-bold text-white">Data Export</h4>
                <p className="text-2xl font-bold text-white mt-2">JSON/CSV</p>
                <p className="text-[10px] text-text-muted uppercase font-bold mt-1">Supported Formats</p>
              </div>
            </div>
            <div className="bg-accent-pink/5 border border-accent-pink/20 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-accent-pink" />
                <h3 className="text-lg font-bold text-white">Danger Zone</h3>
              </div>
              <p className="text-xs text-text-muted mb-6 leading-relaxed">Once you delete your account, there is no going back. All your security logs, configurations, and history will be permanently erased.</p>
              <button className="w-full sm:w-auto bg-accent-pink/10 text-accent-pink border border-accent-pink/20 px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-accent-pink hover:text-white transition-all">
                Delete Account
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto space-y-8 lg:space-y-12 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">System Settings</h1>
          <p className="text-xs sm:text-sm text-text-muted mt-1">Configure your security preferences and account details.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all text-text-muted hover:text-white">
            <RefreshCw className="w-4 h-4" /> Reset
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-accent-purple text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg shadow-accent-purple/30">
            <Save className="w-4 h-4" /> Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-3">
          <nav className="flex lg:flex-col gap-1 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {[
              { id: 'profile', label: 'Profile Settings', icon: User },
              { id: 'security', label: 'Security & Privacy', icon: Shield },
              { id: 'notifications', label: 'Notifications', icon: Bell },
              { id: 'network', label: 'Network Config', icon: Globe },
              { id: 'access', label: 'Access Control', icon: Lock },
              { id: 'data', label: 'Data Management', icon: Database },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveSection(item.id as SettingSection)}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap",
                  activeSection === item.id 
                    ? "bg-accent-purple/10 text-accent-purple" 
                    : "text-text-muted hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="col-span-12 lg:col-span-9">
          <AnimatePresence mode="wait">
            {renderSection()}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
