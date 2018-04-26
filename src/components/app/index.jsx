import React from "react";
import SwitchCSSTransitionGroup from "switch-css-transition-group";
import { withRouter } from "react-router";

import Index from "../../pages/index";
import About from "../../pages/about";
import People from "../../pages/people";
import Blog from "../../pages/blog";
import Projects from "../../pages/projects";
import Contact from "../../pages/contact";
import Studio from "../../pages/studio";
import notFound from "../../pages/notFound";
import RouteDefaultContainer from "../../containers/default";
import RoutePageContainer from "../../containers/page";

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
				<RoutePageContainer path="/people" component={People} />
				<RoutePageContainer path="/contact" component={Contact} />
				<RoutePageContainer path="/blog" component={Blog} />
				<RoutePageContainer path="/studio" component={Studio} />
				<RoutePageContainer path="/projects" component={Projects} />
				<RouteDefaultContainer component={notFound} />
			</SwitchCSSTransitionGroup>
		</div>
	);
};

export default withRouter(App);
