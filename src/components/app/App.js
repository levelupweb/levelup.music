import React from "react";
import SwitchCSSTransitionGroup from "switch-css-transition-group";
import { withRouter } from "react-router";

// components
import Index from "../../pages/index/index.js";
import About from "../../pages/about/About.js";
import People from "../../pages/people/People.js";
import Blog from "../../pages/blog/Blog.js";
import Projects from "../../pages/projects/Projects.js";
import Contact from "../../pages/contact/Contact.js";
import Studio from "../../pages/studio/Studio.js";
import notFound from "../../pages/notFound/notFound.js";
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
