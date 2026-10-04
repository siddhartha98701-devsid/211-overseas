const PHONE = '919998585211';

export function ContactFloatingButtons() {
  const whatsappUrl = `https://wa.me/${PHONE}?text=Hi%20211%20Overseas%2C%20I%20would%20like%20to%20know%20more%20about%20studying%20or%20working%20abroad.`;
  const telUrl = `tel:+${PHONE}`;

  return (
    <>
      {/* FEATURE 2: Call Now Floating Button (Bottom-Left) */}
      <div
        className="fixed left-5 z-40"
        style={{ bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))' }}
      >
        <a
          href={telUrl}
          aria-label="Call 211 Overseas"
          className="group flex items-center justify-center w-12 h-12 md:w-auto md:h-12 md:px-5 rounded-full bg-[#2F4A3C] hover:bg-[#24382E] text-white shadow-[0_4px_16px_rgba(47,74,60,0.3)] transition-all duration-200 hover:scale-105 active:scale-95"
        >
          {/* Phone Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {/* Desktop Text */}
          <span className="hidden md:inline ml-2 text-xs uppercase tracking-widest font-medium">
            Call Now
          </span>
        </a>
      </div>

      {/* FEATURE 1: Floating WhatsApp Chat Button (Bottom-Right) */}
      <div
        className="fixed right-5 z-40 flex items-center"
        style={{ bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))' }}
      >
        {/* Desktop-only Hover Tooltip */}
        <span
          className="hidden md:block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#15140F] text-[#F6F3EE] text-xs font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap mr-3"
          aria-hidden="true"
        >
          Chat with us
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all duration-200 hover:scale-105 active:scale-95"
        >
          {/* Tooltip embedded for clean hover trigger */}
          <span
            className="hidden md:block absolute right-full mr-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#15140F] text-[#F6F3EE] text-xs font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap"
            aria-hidden="true"
          >
            Chat with us
          </span>

          {/* Official WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="currentColor"
            className="flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.36C16.31 14.24 15.1 13.64 14.88 13.56C14.65 13.47 14.49 13.43 14.32 13.68C14.15 13.93 13.68 14.48 13.53 14.65C13.39 14.81 13.24 14.84 12.99 14.71C12.74 14.59 11.94 14.33 11 13.49C10.26 12.83 9.76 12.02 9.62 11.77C9.47 11.52 9.6 11.39 9.73 11.26C9.84 11.14 9.98 10.96 10.11 10.82C10.23 10.67 10.27 10.57 10.35 10.4C10.44 10.24 10.39 10.1 10.33 9.97C10.27 9.85 9.78 8.64 9.57 8.14C9.37 7.66 9.17 7.72 9.02 7.71C8.87 7.7 8.71 7.7 8.54 7.7C8.38 7.7 8.11 7.76 7.89 8.01C7.66 8.26 7.03 8.85 7.03 10.05C7.03 11.26 7.91 12.42 8.03 12.59C8.16 12.75 9.76 15.23 12.22 16.29C12.81 16.54 13.26 16.69 13.62 16.81C14.21 16.99 14.75 16.97 15.18 16.9C15.65 16.83 16.64 16.3 16.84 15.73C17.05 15.16 17.05 14.67 16.99 14.57C16.93 14.47 16.81 14.41 16.56 14.36Z" />
          </svg>
        </a>
      </div>
    </>
  );
}
