import React from "react";
import SwitchCSSTransitionGroup from "switch-css-transition-group";
import { withRouter } from "react-router";

// components
import Index from "../../pages/index/index.js";
import NoMatch from "../../components/noMatch/NoMatch.js";
import RouteDefaultContainer from "../../containers/RouteDefaultContainer.js";

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
				<RouteDefaultContainer path="/" component={Index} />
				<RouteDefaultContainer component={NoMatch} />
			</SwitchCSSTransitionGroup>
		</div>
	);
};

export default withRouter(App);
