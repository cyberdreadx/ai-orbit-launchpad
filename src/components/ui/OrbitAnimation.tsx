
const OrbitAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large orbit */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-full h-full rounded-full border border-white/10 animate-spin" style={{ animationDuration: '20s' }}>
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-blue-400/50" />
        </div>
      </div>
      
      {/* Medium orbit */}
      <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-full h-full rounded-full border border-white/5 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-pink-400/50" />
        </div>
      </div>
      
      {/* Small orbit */}
      <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-full h-full rounded-full border border-white/20 animate-spin" style={{ animationDuration: '10s' }}>
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-green-400/50" />
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default OrbitAnimation;
