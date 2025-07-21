import React from 'react';

interface TrustBadgeProps {
  icon: string;
  text: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center w-40">
      <div className="w-16 h-16 rounded-full bg-[var(--color-off-white)] flex items-center justify-center mb-3">
        {icon === 'encryption' && (
          <svg className="w-8 h-8 text-[var(--color-deep-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        )}
        {icon === 'gdpr' && (
          <svg className="w-8 h-8 text-[var(--color-deep-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        )}
        {icon === 'nospam' && (
          <svg className="w-8 h-8 text-[var(--color-deep-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
          </svg>
        )}
      </div>
      <span className="text-sm text-[var(--color-navy-blue)] font-medium text-center">{text}</span>
    </div>
  );
};

export default TrustBadge;