// src/app/status/page.js
export default function Status() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700 rounded-full mix-blend-overlay opacity-10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-700 rounded-full mix-blend-overlay opacity-10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-700 rounded-full mix-blend-overlay opacity-10 blur-[100px] animate-pulse-slower"></div>
      </div>

      <div className="max-w-lg w-full bg-zinc-900/70 backdrop-blur-md rounded-3xl overflow-hidden border border-zinc-800/60 relative shadow-2xl shadow-purple-900/10 z-10">
        {/* Spotlight effect */}
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-violet-600/20 to-transparent opacity-30 blur-3xl"></div>

        {/* Card content */}
        <div className="px-8 pt-16 pb-12 relative z-10">
          {/* Status icon with animation */}
          <div className="flex justify-center mb-10">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-red-500/10 rounded-full animate-ping opacity-75"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Modern typography with gradient effect */}
          <h1 className="text-5xl font-bold text-center text-white mb-6 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Not Eligible
            </span>
          </h1>

          <p className="text-center text-zinc-300 text-lg mb-10 leading-relaxed max-w-md mx-auto">
            Your account doesn&apos;t meet the requirements for this feature.
            Please try using another account or verify your identity.
          </p>

          {/* Modern buttons with improved hover effects */}
          <div className="flex flex-col gap-4 max-w-xs mx-auto">
            <button className="w-full py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-medium rounded-xl hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-violet-900/20 transform hover:-translate-y-0.5">
              Try Another Account
            </button>

            <button className="w-full py-4 bg-zinc-800/70 text-zinc-300 font-medium rounded-xl hover:bg-zinc-700/70 border border-zinc-700/60 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-0.5">
              Return to Home
            </button>
          </div>

          {/* Extra information */}
          <div className="mt-10 pt-6 border-t border-zinc-800/60 text-center">
            <p className="text-zinc-500 text-sm mb-2">
              Error Code:{" "}
              <span className="text-zinc-400 font-mono">
                ACC_ELIGIBILITY_04
              </span>
            </p>
            <div className="flex justify-center items-center gap-1 text-zinc-500 text-sm">
              <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
              This status has been logged for security purposes
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent slide-animation"></div>
        </div>
      </div>

      {/* Improved floating help option */}
      <div className="absolute bottom-8 text-zinc-500 text-sm z-10">
        <a
          href="#"
          className="group hover:text-white transition-colors duration-300 flex items-center gap-2 bg-zinc-900/50 backdrop-blur-md py-2 px-3 rounded-full border border-zinc-800/50 hover:border-zinc-700/70">
          <svg
            className="w-5 h-5 group-hover:text-pink-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Need help? Contact support
        </a>
      </div>
    </div>
  );
}
