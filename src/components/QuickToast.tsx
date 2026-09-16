import React from 'react';
import { Check, Sparkles, X } from 'lucide-react';

interface QuickToastProps {
  message: string | null;
  onDismiss: () => void;
}

export const QuickToast: React.FC<QuickToastProps> = ({ message, onDismiss }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="bg-[#241D1A] text-[#F4EFE6] border border-[#362D29] shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-3 text-xs">
        <div className="w-6 h-6 rounded-full bg-[#C25B34] text-white flex items-center justify-center shrink-0">
          <Check className="w-3.5 h-3.5" />
        </div>
        <span className="font-medium pr-2">{message}</span>
        <button
          onClick={onDismiss}
          className="text-[#D8CCBA] hover:text-white p-1"
          aria-label="Dismiss Notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
