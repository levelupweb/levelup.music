import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter  } from 'react-router-dom';
import registerServiceWorker from "./registerServiceWorker";
import App from './components/app';
 
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0)
  }
  render() {
    return this.props.children
  }
}

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop>
			<App />
		</ScrollToTop>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
