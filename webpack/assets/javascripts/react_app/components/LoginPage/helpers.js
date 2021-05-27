export const adjustAlerts = alerts => {
  const submitErrors = [];
  const modifiedAlerts = [];

  alerts &&
    Object.keys(alerts).forEach((alertType, index) => {
      const alertMessage = alerts[alertType];
      if (alertType === 'error') {
        submitErrors.push(alertMessage);
      } else if (alertMessage) {
        modifiedAlerts.push({
          variant: alertType,
          title: alertMessage,
          key: index,
        });
      }
    });

  return {
    modifiedAlerts,
    submitErrors,
  };
};
