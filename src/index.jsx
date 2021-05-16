import './scss/style.scss';

const reactRoot = document.createElement('div');
document.body.appendChild(reactRoot);

import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
	return <button type="button" className="btn btn-primary">Hello from react and bootstrap</button>;
};

ReactDOM.render(<Index />, reactRoot);
