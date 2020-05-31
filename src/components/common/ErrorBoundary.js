import React from 'react';

import Toast from './Toast';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Toast context='Something went wrong. Please try to refresh the page.'/>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;