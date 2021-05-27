import React from 'react';
import PropTypes from 'prop-types';
import {
  LoginPage as PFLoginPage,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import { translate as __, sprintf } from '../../common/I18n';
import { adjustAlerts } from './helpers';
import Alerts from './components/Alerts';
import LoginForm from './components/LoginForm';
import './LoginPage.scss';

const LoginPage = ({
  alerts,
  backgroundUrl,
  caption,
  logoSrc,
  token,
  version,
}) => {
  const { modifiedAlerts, submitErrors } = adjustAlerts(alerts);
  const textContent = (
    <TextContent>
      <Text component={TextVariants.h1} id="title">
        {__('Welcome')}
      </Text>
      {version && (
        <Text component={TextVariants.p} id="version">
          {sprintf(__('Version %s'), version)}
        </Text>
      )}
      <br />
      {caption && (
        <Text component={TextVariants.p} id="login-footer-text">
          {caption}
        </Text>
      )}
    </TextContent>
  );

  return (
    <>
      <Alerts serverAlerts={modifiedAlerts} />
      <PFLoginPage
        footerListVariants="inline"
        brandImgSrc={logoSrc}
        brandImgAlt="Foreman logo"
        backgroundImgSrc={backgroundUrl}
        backgroundImgAlt="background-image"
        textContent={textContent}
        loginTitle={__('Log in to your account')}
      >
        <LoginForm token={token} errors={submitErrors} />
      </PFLoginPage>
    </>
  );
};

LoginPage.propTypes = {
  alerts: PropTypes.shape({
    success: PropTypes.string,
    warning: PropTypes.string,
    error: PropTypes.string,
  }),
  backgroundUrl: PropTypes.string,
  caption: PropTypes.string,
  logoSrc: PropTypes.string,
  token: PropTypes.string.isRequired,
  version: PropTypes.string,
};

LoginPage.defaultProps = {
  alerts: null,
  backgroundUrl: null,
  caption: null,
  logoSrc: null,
  version: null,
};

export default LoginPage;
