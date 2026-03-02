import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Overview } from './pages/Overview';
import { Issues } from './pages/Issues';
import { FilesPage } from './pages/Files';
import { ThreatDetails } from './pages/ThreatDetails';
import { Threats } from './pages/Threats';
import { HelpSupport } from './pages/HelpSupport';
import { Settings } from './pages/Settings';
import { PageId } from './types';
import { AnimatePresence, motion } from 'motion/react';

import { Upgrade } from './pages/Upgrade';
import { Logout } from './pages/Logout';
import { ThemePage } from './pages/ThemePage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'Overview': return <Overview />;
      case 'Issues': return <Issues />;
      case 'Files': return <FilesPage />;
      case 'Threat Details': return <ThreatDetails />;
      case 'Threats': return <Threats />;
      case 'Help & Supports': return <HelpSupport />;
      case 'Settings': return <Settings />;
      case 'Upgrade': return <Upgrade />;
      case 'Logout': return <Logout />;
      case 'Themes': return <ThemePage />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-bg-dark text-white font-sans selection:bg-accent-purple/30 overflow-hidden">
      <Sidebar 
        activePage={activePage} 
        onPageChange={setActivePage} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 flex flex-col min-w-0">
        <div className="px-4 lg:px-8 pt-4 lg:pt-8">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-4 lg:px-8 pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
