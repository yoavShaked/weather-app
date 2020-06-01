import React from "react";
import styled from "styled-components";
import Toast from "./Toast";

const defaultContext = "Something went wrong...";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      const context =
        (this.state.error && this.state.error.toString()) || defaultContext;

      return (
        <ErrorToast>
          <Toast context={context} />
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
