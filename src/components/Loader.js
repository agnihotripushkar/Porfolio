
"use client";

export default function Loader() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-white dark:bg-gray-900">
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <h2 className="mt-8 text-xl font-medium text-gray-600 dark:text-gray-300 animate-pulse">
                Loading Project Details...
            </h2>

            <style jsx>{`
        .loader {
          --dim: 3rem;
          width: var(--dim);
          height: var(--dim);
          position: relative;
          animation: spin988 2s linear infinite;
        }

        .circle {
          --color: #3b82f6; /* blue-500 */
          --dim: 1.2rem;
          width: var(--dim);
          height: var(--dim);
          background-color: var(--color);
          border-radius: 50%;
          position: absolute;
        }

        .circle:nth-child(1) {
          top: 0;
          left: 0;
        }

        .circle:nth-child(2) {
          top: 0;
          right: 0;
        }

        .circle:nth-child(3) {
          bottom: 0;
          left: 0;
        }

        .circle:nth-child(4) {
          bottom: 0;
          right: 0;
        }

        @keyframes spin988 {
          0% {
            transform: scale(1) rotate(0);
          }
          20%, 25% {
            transform: scale(1.3) rotate(90deg);
          }
          45%, 50% {
            transform: scale(1) rotate(180deg);
          }
          70%, 75% {
            transform: scale(1.3) rotate(270deg);
          }
          95%, 100% {
            transform: scale(1) rotate(360deg);
          }
        }
      `}</style>
        </div>
    );
}
