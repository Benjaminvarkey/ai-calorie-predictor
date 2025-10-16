const BackgroundAnimations = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Floating fitness icons */}
      <div className="absolute top-10 left-10 animate-float-slow">
        <svg className="w-16 h-16 text-blue-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
        </svg>
      </div>
      <div className="absolute top-3/4 right-1/4 animate-float-medium">
        <svg className="w-12 h-12 text-green-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 5.5A2.5 2.5 0 0114.5 8a2.5 2.5 0 01-2.5 2.5A2.5 2.5 0 019.5 8 2.5 2.5 0 0112 5.5M12 2a6 6 0 016 6c0 2.22-1.21 4.16-3 5.2V22h-6v-8.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 016-6z"/>
        </svg>
      </div>
      <div className="absolute top-1/4 right-10 animate-float-fast">
        <svg className="w-14 h-14 text-red-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      
      {/* Running person silhouette */}
      <div className="absolute bottom-10 left-1/4 animate-run">
        <svg className="w-20 h-20 text-purple-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
        </svg>
      </div>
      
      {/* Pulse rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-32 h-32 bg-blue-500/10 rounded-full animate-ping-slow"></div>
        <div className="absolute w-32 h-32 bg-green-500/10 rounded-full animate-ping-medium"></div>
        <div className="absolute w-32 h-32 bg-purple-500/10 rounded-full animate-ping-fast"></div>
      </div>
    </div>
  );
};

export default BackgroundAnimations;