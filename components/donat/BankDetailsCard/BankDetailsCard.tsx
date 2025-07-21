// components/donat/BankDetailsCard/BankDetailsCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BankAccount } from '@/data/data'; // Adjust path if necessary

interface BankDetailsCardProps {
  account: BankAccount;
  index: number; // For staggered animation
}

export default function BankDetailsCard({ account, index }: BankDetailsCardProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text:', err);
      // Optionally show a temporary error message to the user
    });
  };

  const CopyButton = ({ text, fieldName }: { text: string; fieldName: string }) => (
    <button
      onClick={() => copyToClipboard(text, fieldName)}
      className="ml-2 p-1 text-[var(--color-deep-red)] hover:text-[var(--color-accent-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-deep-red)] rounded transition duration-200 ease-in-out"
      aria-label={`Copy ${fieldName} to clipboard`}
    >
      {copiedField === fieldName ? (
        <svg className="w-5 h-5 inline-block text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
      ) : (
        <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2H6zM5 9.882V5a1 1 0 011-1h8a1 1 0 011 1v4.882l-3 3.618-3-3.618zM12 11a1 1 0 100 2h-2a1 1 0 100-2h2z"></path></svg>
      )}
    </button>
  );

  return (
    <div
      className="bg-white rounded-lg shadow-credibility p-6 border-b-4 border-[var(--color-deep-red)] transform hover:scale-105 transition duration-300 ease-in-out fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {account.logo && (
        <div className="mb-4 text-center">
          <Image
            src={account.logo}
            alt={`${account.bankName} Logo`}
            width={120}
            height={40}
            objectFit="contain"
            className="mx-auto"
          />
        </div>
      )}
      <h3 className="text-2xl font-heading font-bold text-[var(--color-navy-blue)] mb-4 text-center">
        {account.bankName}
      </h3>
      <ul className="space-y-3 text-lg text-[var(--color-dark-gray)]">
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--color-light-gray)] pb-2">
          <span className="font-semibold text-[var(--color-navy-blue)]">Account Title:</span>
          <span className="flex items-center">
            {account.accountTitle} <CopyButton text={account.accountTitle} fieldName="Account Title" />
          </span>
        </li>
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--color-light-gray)] pb-2">
          <span className="font-semibold text-[var(--color-navy-blue)]">Account Number:</span>
          <span className="flex items-center">
            {account.accountNumber} <CopyButton text={account.accountNumber} fieldName="Account Number" />
          </span>
        </li>
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--color-light-gray)] pb-2">
          <span className="font-semibold text-[var(--color-navy-blue)]">IBAN:</span>
          <span className="flex items-center">
            {account.iban} <CopyButton text={account.iban} fieldName="IBAN" />
          </span>
        </li>
        {account.swiftCode && (
          <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--color-light-gray)] pb-2">
            <span className="font-semibold text-[var(--color-navy-blue)]">SWIFT Code:</span>
            <span className="flex items-center">
              {account.swiftCode} <CopyButton text={account.swiftCode} fieldName="SWIFT Code" />
            </span>
          </li>
        )}
        {account.branchName && (
          <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--color-light-gray)] pb-2">
            <span className="font-semibold text-[var(--color-navy-blue)]">Branch Name:</span>
            <span className="flex items-center">
              {account.branchName} <CopyButton text={account.branchName} fieldName="Branch Name" />
            </span>
          </li>
        )}
        {account.branchCode && (
          <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--color-light-gray)] pb-2">
            <span className="font-semibold text-[var(--color-navy-blue)]">Branch Code:</span>
            <span className="flex items-center">
              {account.branchCode} <CopyButton text={account.branchCode} fieldName="Branch Code" />
            </span>
          </li>
        )}
        <li className="flex flex-col sm:flex-row sm:items-center justify-between">
          <span className="font-semibold text-[var(--color-navy-blue)]">Currency:</span>
          <span>{account.currency}</span>
        </li>
      </ul>
    </div>
  );
}