// LoadingOverlay.tsx
import React from 'react';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isLoading ? 'block' : 'hidden'} bg-black bg-opacity-50 z-50`}>
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
    </div>
  );
};

export default LoadingOverlay;

