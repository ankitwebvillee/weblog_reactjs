import React, { Component } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Category from "./views/Category";
import SingleBlog from "./views/Single_blog";
import About from "./views/About";
import Author from "./views/Author";

const PrivateRoute = ({ component, ...rest }) => {
  const user = window.localStorage.getItem("Authorization");
  const isAuthed = user ? true : false;
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        isAuthed ? (
          <div>{React.createElement(component, props)}</div>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component, ...rest }) => {
  const user = window.localStorage.getItem("Authorization");
  const isAuthed = user ? true : false;
  // loggedIn = isAuthed
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        isAuthed ? (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location }
            }}
          />
        ) : (
          <div>{React.createElement(component, props)}</div>
        )
      }
    />
  );
};

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?&client-id=AaLrLLHCMIqVUzu4AQu_8GZdyRueAwLLH7A6d2BkGEfcQYyB-iuJqTia_gVmfttqK_TXmZDRUi9FhI_C&disable-funding=credit,card";
    script.async = true;
    script.id = "paypalscript";
    document.body.appendChild(script);
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            {/* <PublicRoute
              exact
              path="/"
              {...this.props}
              component={HomeContainer}
            /> */}

            <Route exact path="/" {...this.props} component={Home} />
            <Route exact path="/contact" {...this.props} component={Contact} />
            <Route
              exact
              path="/category"
              {...this.props}
              component={Category}
            />
            <Route
              exact
              path="/single-blog"
              {...this.props}
              component={SingleBlog}
            />
            <Route exact path="/about" {...this.props} component={About} />
            <Route exact path="/author" {...this.props} component={Author} />
            {/* <Route {...this.props} component={} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
