import { t } from '@lingui/macro';
import { useForm } from 'react-hook-form';

import {
  validateDateOfBirth,
  validateEmail,
  validateName,
  validatePassword,
  validateRepeatPassword,
} from '../utils/formValidations';

export const useFormValidation = () => {
  const { register, errors, watch, handleSubmit } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
  });

  /** Validations */
  const registerEmail = register(validateEmail);

  const registerPassword = register(validatePassword);

  const registerRepeatPassword = register(validateRepeatPassword(watch));

  const registerName = register(validateName);

  const registerDateOfBirth = register(validateDateOfBirth);

  return {
    handleSubmit,
    errors,
    registerEmail,
    registerPassword,
    registerRepeatPassword,
    registerName,
    registerDateOfBirth,
  };
};
