import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import queryString from 'query-string';

interface Props extends RouteComponentProps {
  setCurrentUser: (user: any) => void;
  currentUser: any;
}


const TestingLoginComponent: React.FC<Props> = ({ location }) => {
  const parsed = queryString.parse(location.search);

  const isValid = parsed.email !== '';

return  <div className="App" data-cy="testing">{isValid && <div data-cy="isValid">Valid Email</div>}</div>;
}

export const TestingLogin = withRouter(TestingLoginComponent);