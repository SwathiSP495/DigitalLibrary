import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Notes from "./containers/Notes";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";
import Settings from "./containers/Settings";
import ChangeEmail from "./containers/ChangeEmail";
import ResetPassword from "./containers/ResetPassword";
import ChangePassword from "./containers/ChangePassword";
import Category from "./containers/Category";
import Student from "./containers/Student";
import AddStudent from "./containers/AddStudent";
import AddCategory from "./containers/AddCategory";
import StudentSuccess from "./containers/StudentSuccess";

import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Homme from "./components/Home";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />

    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/library"
      exact
      component={Homme}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={Signup}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login/reset"
      exact
      component={ResetPassword}
      props={childProps}
    />

    <AuthenticatedRoute
      path="/settings"
      exact
      component={Settings}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings/email"
      exact
      component={ChangeEmail}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings/password"
      exact
      component={ChangePassword}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/new"
      exact
      component={NewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/library/category"
      exact
      component={Category}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/library/add"
      exact
      component={AddCategory}
      props={childProps}
    />
     <AuthenticatedRoute
      path="/library/student"
      exact
      component={Student}
      props={childProps}
    />
     <AuthenticatedRoute
      path="/student/add"
      exact
      component={AddStudent}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/student/success"
      exact
      component={StudentSuccess}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={Notes}
      props={childProps}
    />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
