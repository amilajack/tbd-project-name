// @flow
import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import type { Node } from 'react';

const SignInButton = (): Node => (
  <Button
    type="submit"
    fullWidth
    variant="raised"
    color="primary"
    className="submit"
  >
    Sign in
  </Button>
);

export default SignInButton;
