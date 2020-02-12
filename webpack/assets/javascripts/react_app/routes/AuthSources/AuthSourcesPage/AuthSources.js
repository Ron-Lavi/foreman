import React from 'react';
import { EmptyState, Button } from 'patternfly-react';

const AuthSources = props => (
  <EmptyState>
    <EmptyState.Icon />
    <EmptyState.Title>Empty State Title</EmptyState.Title>
    <EmptyState.Info>
      This is the Empty State component. The goal of a empty state pattern is to
      provide a good first impression that helps users to achieve their goals.
      It should be used when a view is empty because no objects exists and you
      want to guide the user to perform specific actions.
    </EmptyState.Info>
    <EmptyState.Help>
      For more information please see{' '}
      <a
        href="#"
        onClick={event => {
          event.preventDefault();
        }}
      >
        pfExample
      </a>
    </EmptyState.Help>
    <EmptyState.Action>
      <Button bsStyle="primary" bsSize="large">
        Main Action
      </Button>
    </EmptyState.Action>
    <EmptyState.Action secondary>
      <Button>Secondary Action 1</Button>
      <Button>Secondary Action 2</Button>
      <Button title="Perform an action">Secondary Action 3</Button>
    </EmptyState.Action>
  </EmptyState>
);

export default AuthSources;
