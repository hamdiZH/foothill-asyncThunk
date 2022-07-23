import {useState} from "react";

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const reset = () => {
    setFormData(initialState);
  }

  const handleInputChange = field => e => {
    setFormData({...formData, [field]: e.target.value})
  }

  return {formData, handleInputChange, reset};
}
