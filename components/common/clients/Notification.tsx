// src/components/Notification.tsx
'use client';

import { useNotification } from '@/src/context/NotificationContext';
import { XIcon } from 'lucide-react';
import React from 'react';

const Notification: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow ${
            notification.type === 'success'
              ? 'bg-green-100'
              : notification.type === 'error'
              ? 'bg-red-100'
              : 'bg-blue-100'
          }`}
        >
          <div className="ml-3 text-sm font-normal">{notification.message}</div>
          <button
            onClick={() => removeNotification(notification.id)}
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex h-8 w-8"
          >
            <span className="sr-only">Close</span>
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
