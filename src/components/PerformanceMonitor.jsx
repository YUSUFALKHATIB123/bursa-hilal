import React, { useEffect, useState } from 'react';
import { usePerformanceMonitor } from '../hooks/use-performance';

const PerformanceMonitor = ({ showMetrics = false }) => {
  const metrics = usePerformanceMonitor();
  const [isVisible, setIsVisible] = useState(showMetrics);

  useEffect(() => {
    // Log performance metrics to console in development
    if (process.env.NODE_ENV === 'development' && Object.keys(metrics).length > 0) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
        Performance Metrics
      </h3>
      <div className="space-y-1 text-xs">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">{key}:</span>
            <span className="text-gray-900 dark:text-white font-mono">
              {typeof value === 'number' ? `${value.toFixed(2)}ms` : value}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};

export default PerformanceMonitor;
