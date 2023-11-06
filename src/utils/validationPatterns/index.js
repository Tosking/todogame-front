export const LoginPattern = {
  password: {
    minLength: {
      value: 9,
      message: "The password must be at least 9 characters",
    },
  },
  required: {
    value: true,
    message: "This field is required",
  },
};
export const RegisterPattern = {
  password: {
    minLength: {
      value: 8,
      message: "The password must be at least 9 characters",
    },
  },
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Please, enter valid email,example:test@test.ru",
    },
  },
  required: {
    value: true,
    message: "This field is required",
  },
};
