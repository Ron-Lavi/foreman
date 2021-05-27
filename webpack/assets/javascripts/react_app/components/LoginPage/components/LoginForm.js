import React from 'react';
import {
    ActionGroup,
    Alert,
    Button,
    Form,
    FormAlert,
    FormGroup,
    Spinner,
    TextInput,
} from '@patternfly/react-core';

const LoginForm = ({ token, errors }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    return (
        <Form action="/users/login" method="post">
            <FormAlert>
                {errors.map(error => (
                    <Alert variant="danger" title={error} aria-live="polite" isInline />
                ))}
            </FormAlert>
            <FormGroup label={__('Username')} fieldId="label-username">
                <TextInput
                    value={username}
                    id="login_login"
                    aria-describedby="username-helper"
                    onChange={setUsername}
                    name="login[login]"
                    autoFocus
                />
            </FormGroup>
            <FormGroup label={__('Password')} fieldId="label-password">
                <TextInput
                    value={password}
                    type="password"
                    id="login_password"
                    name="login[password]"
                    aria-describedby="password-helper"
                    onChange={setPassword}
                />
            </FormGroup>
            <input name="authenticity_token" type="hidden" value={token} />
            <ActionGroup>
                <Button
                    isDisabled={!username || !password}
                    variant="primary"
                    id="login_submit_btn"
                    name="commit"
                    type="submit"
                    onClick={() => setLoading(true)}
                >
                    {__('LOG IN')}
                </Button> {loading && <Spinner isSVG size='lg' />}
            </ActionGroup>
        </Form>
    );
};

export default LoginForm;
