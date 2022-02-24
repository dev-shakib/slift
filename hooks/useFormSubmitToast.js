import { useEffect, useState } from "react";

const useFormSubmitToast = (formState, onError, onSuccess) => {
  const [showToast, setShowToast] = useState(false);
  const hide = () => setShowToast(false);

  useEffect(() => {
    if (
      (onError && formState.isSubmitted && !formState.isValid) ||
      (onSuccess && formState.isSubmitted && formState.isValid)
    ) {
      setShowToast(true);
    }
  }, [formState.submitCount]);

  return { showToast, hide };
};

export default useFormSubmitToast;
