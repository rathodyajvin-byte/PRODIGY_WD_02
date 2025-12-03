import React from 'react';
import Stopwatch from './components/Stopwatch';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-slate-100 mb-2">Chronos</h1>
            <p className="text-slate-500 text-sm tracking-wide uppercase">Precision Stopwatch</p>
        </header>

        <Stopwatch />
        
        <footer className="mt-12 text-center text-slate-600 text-sm">
            <p>Designed with React & Tailwind</p>
        </footer>
      </div>
    </div>
  );
};

export default App;