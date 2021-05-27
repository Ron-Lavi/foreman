import React from 'react';
import {
    Alert,
    AlertGroup,
    AlertActionCloseButton,
    AlertVariant,
} from '@patternfly/react-core';

const Alerts = ({ serverAlerts }) => {
    if (!serverAlerts) return;

    const [alerts, setAlerts] = React.useState(serverAlerts);

    const removeAlert = key => {
        setAlerts(prevAlerts => prevAlerts.filter(el => el.key !== key));
    };

    return (
        <React.Fragment>
            <AlertGroup isToast>
                {alerts.map(({ key, variant, title }) => (
                    <Alert
                        isLiveRegion
                        variant={AlertVariant[variant]}
                        title={title}
                        actionClose={
                            <AlertActionCloseButton onClose={() => removeAlert(key)} />
                        }
                        key={key}
                    />
                ))}
            </AlertGroup>
        </React.Fragment>
    );
};
export default Alerts;
