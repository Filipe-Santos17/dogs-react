import { useState } from "react";

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    msg: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    msg: "A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres",
  },
  number: {
    regex: /^\d+$/,
    msg: "Utilize apenas números"
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function validate() {
    if (type === false) {
      return true;
    }

    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].msg);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onchange({ currentTarget }) {
    error && validate(currentTarget.value);
    setValue(currentTarget.value);
  }

  return {
    value,
    setValue,
    onchange,
    validate: () => validate(value), //Exporta como um método que se autoativa com o seu valor
    onBlur: () => validate(value), //Evento que ocorre ao clica e sair do elemento
    error,
  };
};

export default useForm;
