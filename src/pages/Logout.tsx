import React from 'react';
import { motion } from 'motion/react';
import { LogOut, ShieldAlert, ArrowRight } from 'lucide-react';

export const Logout = () => {
  return (
    <div className="h-[70vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card-dark border border-white/5 rounded-3xl p-12 text-center max-w-md w-full shadow-2xl"
      >
        <div className="w-20 h-20 bg-accent-pink/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <LogOut className="w-10 h-10 text-accent-pink" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">Are you sure?</h1>
        <p className="text-sm text-text-muted mb-10 leading-relaxed">Logging out will end your current security session. You will need to re-authenticate to access the dashboard.</p>
        
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-accent-pink text-white py-3 rounded-xl text-sm font-bold shadow-lg shadow-accent-pink/20 hover:bg-opacity-90 transition-all"
          >
            Yes, Log Out
          </button>
          <button 
            onClick={() => window.history.back()}
            className="w-full bg-white/5 text-white py-3 rounded-xl text-sm font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            Go Back <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-text-muted" />
          <span className="text-[10px] text-text-muted uppercase font-bold tracking-widest">VertexGuard Secure Auth</span>
        </div>
      </motion.div>
    </div>
  );
};
