const BackgroundAnimations = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-float-fast"></div>

      {/* Fitness icons */}
      <div className="absolute top-20 right-[10%] animate-float-slow">
        <div className="bg-white/50 p-4 rounded-2xl backdrop-blur-sm">
          <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20%] right-[20%] animate-float-medium">
        <div className="bg-white/50 p-4 rounded-2xl backdrop-blur-sm">
          <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute top-[30%] left-[10%] animate-float-fast">
        <div className="bg-white/50 p-4 rounded-2xl backdrop-blur-sm">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>



      {/* Dots pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping-slow"></div>
      <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-purple-400 rounded-full animate-ping-medium"></div>
      <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-green-400 rounded-full animate-ping-fast"></div>
    </div>
  );
};

export default BackgroundAnimations;