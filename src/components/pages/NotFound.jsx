import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-gradient animate-scale-in">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-secondary-800">
            Page Not Found
          </h2>
        </div>

        <div className="space-y-3">
          <p className="text-secondary-600 text-lg">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-secondary-500">
            It might have been moved or deleted.
          </p>
        </div>

        <div className="pt-4">
          <Button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3"
          >
            <ApperIcon name="Home" size={20} />
            Back to Dashboard
          </Button>
        </div>

        <div className="pt-8 opacity-50">
          <ApperIcon name="Hotel" size={64} className="mx-auto text-secondary-300" />
        </div>
      </div>
    </div>
  );
}