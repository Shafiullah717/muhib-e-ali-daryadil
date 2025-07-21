import React from 'react';
import { ContactMethod } from '@/data/data';

interface ContactMethodCardProps {
  method: ContactMethod;
}

const ContactMethodCard: React.FC<ContactMethodCardProps> = ({ method }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-[var(--color-light-gray)] hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="w-12 h-12 rounded-full bg-[var(--color-off-white)] flex items-center justify-center mb-4">
        {method.icon === 'mail' && (
          <svg className="w-6 h-6 text-[var(--color-deep-red)]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zm0 12H4V8.373l8 6.222 8-6.222V18z"/>
          </svg>
        )}
        {method.icon === 'phone' && (
          <svg className="w-6 h-6 text-[var(--color-deep-red)]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 2h-2v2h-2v2H9V4H7V2H5v2H3v2H1v2h2v2h2v2H7v2H9v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2V4h-2V2zm-4 14h-2v-2h2v2zm0-4h-2v-2h2v2zM15 8h-2V6h2v2zM9 8H7V6h2v2zm0 4H7v-2h2v2zm0 4H7v-2h2v2z"/>
          </svg>
        )}
        {method.icon === 'location' && (
          <svg className="w-6 h-6 text-[var(--color-deep-red)]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        )}
      </div>
      <h3 className="text-xl font-heading font-bold text-[var(--color-navy-blue)] mb-2">{method.title}</h3>
      <p className="text-[var(--color-dark-gray)] mb-4 flex-grow">{method.description}</p>
      <a 
        href={method.link} 
        className="text-[var(--color-deep-red)] font-medium hover:underline inline-flex items-center space-x-1"
      >
        <span>{method.actionText}</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </a>
    </div>
  );
};

export default ContactMethodCard;