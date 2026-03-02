import React from 'react';
import { motion } from 'motion/react';
import { Zap, Check, Shield, Globe, Cpu, Lock } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    desc: 'Essential security for personal use.',
    features: ['Real-time threat detection', 'Basic file scanning', 'Community support'],
    button: 'Current Plan',
    active: false,
  },
  {
    name: 'Pro',
    price: '$29/mo',
    desc: 'Advanced protection for growing businesses.',
    features: ['AI-powered insights', 'Global threat map', '24/7 priority support', 'Advanced firewall rules'],
    button: 'Upgrade Now',
    active: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Maximum security for large organizations.',
    features: ['Dedicated security analyst', 'Zero-day vulnerability alerts', 'Custom API integrations', 'Multi-region compliance'],
    button: 'Contact Sales',
    active: false,
  },
];

export const Upgrade = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 py-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Upgrade Your Security</h1>
        <p className="text-text-muted max-w-2xl mx-auto">Choose the plan that best fits your security needs. Unlock advanced AI features and global threat intelligence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`bg-card-dark border rounded-3xl p-8 flex flex-col relative overflow-hidden transition-all hover:scale-[1.02] ${
              plan.active ? 'border-accent-purple shadow-2xl shadow-accent-purple/20' : 'border-white/5'
            }`}
          >
            {plan.active && (
              <div className="absolute top-0 right-0 bg-accent-purple text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                Recommended
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-bold text-white">{plan.price}</span>
              {plan.price !== 'Free' && plan.price !== 'Custom' && <span className="text-text-muted text-sm">/month</span>}
            </div>
            <p className="text-xs text-text-muted mb-8 leading-relaxed">{plan.desc}</p>
            
            <div className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-purple/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-purple" />
                  </div>
                  <span className="text-xs text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
              plan.active 
                ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/20' 
                : 'bg-white/5 text-white hover:bg-white/10'
            }`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-card-dark border border-white/5 rounded-3xl p-8">
        <h3 className="text-xl font-bold text-white mb-8 text-center">Why Upgrade?</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: 'AI Analysis', icon: Cpu, desc: 'Deep heuristic scanning' },
            { title: 'Global Map', icon: Globe, desc: 'Real-time threat tracking' },
            { title: 'Advanced Shield', icon: Shield, desc: 'Multi-layer protection' },
            { title: 'Priority Access', icon: Lock, desc: 'Instant security patches' },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="w-12 h-12 bg-accent-purple/10 rounded-2xl flex items-center justify-center mx-auto text-accent-purple">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <p className="text-[10px] text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
