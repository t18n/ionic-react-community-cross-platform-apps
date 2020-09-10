import { useForm } from 'react-hook-form';

export const useHandleSubmit = () => {
  const { handleSubmit } = useForm();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>, callback: () => void) => {
    // Stopping parent forms to trigger their submit
    if (e) {
      console.log('submmitting form');
      // Sometimes not true, e.g. React Native
      if (typeof e.preventDefault === 'function') {
        e.preventDefault();
      }

      // Prevent any outer forms from receiving the event
      if (typeof e.stopPropagation === 'function') {
        e.stopPropagation();
      }
    }

    return handleSubmit(callback)(e);
  };

  return { submitHandler };
};
