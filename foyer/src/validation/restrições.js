export const restricoes = {
    emailAddress: {
      presence: {
        allowEmpty: false,
        message: "^Por favor insira um e-mail"
      },
      email: {
        message: "^Por favor insira um e-mail valido"
      }
    },
  };
export default restricoes;