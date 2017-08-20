import React from "react";
import SwitchCSSTransitionGroup from "switch-css-transition-group";
import { withRouter } from "react-router";

// components
import Index from "../../pages/index/index.js";
import About from "../../pages/about/About.js";
import Contact from "../../pages/contact/Contact.js";
import Projects from "../../pages/projects/Projects.js";
import Prices from "../../pages/prices/Prices.js";
import NoMatch from "../../components/noMatch/NoMatch.js";
import RouteDefaultContainer from "../../containers/RouteDefaultContainer.js";
import RoutePageContainer from "../../containers/RoutePageContainer.js";

const App = props => {
	const { location } = props;
	return (
		<div className="App">
			<SwitchCSSTransitionGroup
				location={location}
				transitionName="fade"
				transitionEnterTimeout={600}
				transitionLeaveTimeout={600}
			>
				<RouteDefaultContainer exact path="/" component={Index} />
				<RoutePageContainer path="/about" component={About} />
				<RoutePageContainer path="/projects" component={Projects} />
				<RoutePageContainer path="/prices" component={Prices} />
				<RoutePageContainer path="/contact" component={Contact} />
				<RouteDefaultContainer component={NoMatch} />
			</SwitchCSSTransitionGroup>
		</div>
	);
};

export default withRouter(App);
