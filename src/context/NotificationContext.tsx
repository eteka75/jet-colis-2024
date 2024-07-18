// src/context/NotificationContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface NotificationContextProps {
  notifications: Notification[];
  addNotification: (
    message: string,
    type: 'success' | 'error' | 'info'
  ) => void;
  removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  }
  return context;
};

let notificationId = 0;

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (
    message: string,
    type: 'success' | 'error' | 'info'
  ) => {
    const id = notificationId++;
    setNotifications([...notifications, { id, message, type }]);
    setTimeout(() => removeNotification(id), 5000); // Auto remove after 5 seconds
  };

  const removeNotification = (id: number) => {
    setNotifications((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
