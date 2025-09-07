
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const GasPumpIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 5.275V4c0-1.103-.897-2-2-2s-2 .897-2 2v1.275A4.503 4.503 0 0 0 7.5 9.5v5.025A4.473 4.473 0 0 0 7 15a4.5 4.5 0 0 0 4.5 4.5h.025A4.474 4.474 0 0 0 16 19.525V19h2v-2h-2v-2h2v-2h-2v-.525a4.5 4.5 0 0 0-4-4.225V7h1a2.5 2.5 0 0 1 2.5 2.5c0 .169-.025.325-.05.488L15.95 10A4.493 4.493 0 0 0 17.5 9.5 4.5 4.5 0 0 0 14 5.275zM12 8c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path>
    </svg>
);

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <GasPumpIcon className="h-10 w-10 text-sky-500" />
          <div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Bill Receipt Generator
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
              Create and customize fuel receipts instantly.
              </p>
          </div>
        </div>
        
        {/* User Info and Logout */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-slate-800 dark:text-white">
              Welcome, {user?.username}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {user?.email}
            </p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
