import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../components/TextInput';

const TextInputContainer = ({
  isConfidential = false,
  field,
  form,
  meta,
  label,
  placeholder,
  type,
  className,
}) => {
  const [isCapsLockTooltipShown, toggleCapsLockTooltip] = useState(false);
  const [isPasswordShown, togglePasswordVisibility] = useState(false);

  const checkCapsLock = (event) => {
    if (!event) {
      return;
    }
    if (isConfidential && event.getModifierState) {
      toggleCapsLockTooltip(event.getModifierState('CapsLock'));
    }
  };

  const onChangePasswordVisibility = () => {
    togglePasswordVisibility(!isPasswordShown);
  };

  return (
    <TextInput
      isPasswordShown={isPasswordShown}
      isCapsLockTooltipShown={isCapsLockTooltipShown}
      onChangePasswordVisibility={onChangePasswordVisibility}
      checkCapsLock={checkCapsLock}
      isConfidential={isConfidential}
      field={field}
      form={form}
      meta={meta}
      label={label}
      placeholder={placeholder}
      type={type}
      className={className}
    />
  );
};

TextInputContainer.propTypes = {
  isConfidential: PropTypes.bool,
};

export default TextInputContainer;
