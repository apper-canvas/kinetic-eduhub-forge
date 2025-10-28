import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="text-center space-y-6 max-w-md">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-primary-50 p-6">
            <ApperIcon name="Home" size={48} className="text-primary-500" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Button */}
        <Button
          onClick={() => navigate('/')}
          className="mt-8 inline-flex items-center gap-2"
        >
          <ApperIcon name="Home" size={20} />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}

export default NotFound;