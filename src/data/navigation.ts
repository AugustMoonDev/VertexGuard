import { 
  LayoutDashboard, 
  AlertTriangle, 
  Files, 
  ShieldAlert, 
  Bug, 
  HelpCircle, 
  Settings, 
  Palette
} from 'lucide-react';
import { PageId } from '../types';

export const navItems = [
  { group: 'General', items: [
    { name: 'Overview' as PageId, icon: LayoutDashboard },
    { name: 'Issues' as PageId, icon: AlertTriangle, hasSub: true },
    { name: 'Files' as PageId, icon: Files },
  ]},
  { group: 'Reports', items: [
    { name: 'Threat Details' as PageId, icon: ShieldAlert },
    { name: 'Threats' as PageId, icon: Bug, hasSub: true },
  ]},
  { group: 'Customization', items: [
    { name: 'Themes' as PageId, icon: Palette },
  ]},
  { group: 'Settings', items: [
    { name: 'Help & Supports' as PageId, icon: HelpCircle },
    { name: 'Settings' as PageId, icon: Settings },
  ]}
];
