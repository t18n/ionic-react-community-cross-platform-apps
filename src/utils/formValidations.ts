import { t } from '@lingui/macro';

export const validateEmail = {
  required: {
    value: true,
    message: t`error.validation.fieldRequired`,
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: t`error.validation.invalidEmailFormat`,
  },
};

export const validatePassword = {
  required: {
    value: true,
    message: t`error.validation.fieldRequired`,
  },
  pattern: {
    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{2,}/,
    message: t`error.validation.invalidPasswordCombination`,
  },
  minLength: {
    value: 8,
    message: t`error.validation.passwordMustHaveMinCharacters`,
  },
};

export const validateRepeatPassword = (watch: any) => ({
  required: {
    value: true,
    message: t`error.validation.fieldRequired`,
  },
  validate: (value) => {
    return (
      value === watch('password') || t`error.validation.repeatPasswordMustMatchSelectedPassword`
    );
  },
});

export const validateName = {
  required: {
    value: true,
    message: t`error.validation.fieldRequired`,
  },
  pattern: {
    value: /^[A-Za-z]+$/i,
    message: t`error.validation.nameMustConsistOfOnlyValidCharacters`,
  },
};

export const validateDateOfBirth = {
  required: {
    value: true,
    message: t`error.validation.fieldRequired`,
  },
  pattern: {
    value: /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i,
    message: t`error.validation.invalidDateOfBirthFormat`,
  },
};
