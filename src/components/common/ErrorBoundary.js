import React from "react";
import styled from "styled-components";
import Toast from "./Toast";

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
      return (
        <ErrorToast>
          <Toast context="Something went wrong. Please try to refresh the page." />
        </ErrorToast>
      );
    }

    return this.props.children;
  }
}

const ErrorToast = styled.div`
  .MuiAlert-standardError {
    color: #f45047;
    background-color: #f3bfe1;
    margin: auto;
    width: 752px;
    margin-top: 147px;
  }
`;

export default ErrorBoundary;
