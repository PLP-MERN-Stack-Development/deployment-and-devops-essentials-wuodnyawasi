const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Custom performance monitoring function
export const sendToAnalytics = (metric) => {
  // Send to analytics service (e.g., Google Analytics, Sentry, etc.)
  console.log('Performance Metric:', metric);

  // Example: Send to Sentry
  if (window.Sentry) {
    window.Sentry.captureMessage(`Performance: ${metric.name}`, {
      level: 'info',
      extra: {
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        entries: metric.entries
      }
    });
  }
};

export default reportWebVitals;
