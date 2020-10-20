import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = { hasError: false};
    }

    static getDerivedStateFromError(error) {
        return { hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error catched in boundary: ", errorInfo);

    }

    render(){
        if (this.state.hasError) {
            return(
                <div style={{top: "0"}}>
                    <h1>
                        An error occurred somewhere in the app. Please restart the app for normal functionality.
                    </h1>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;