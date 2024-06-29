const USER_TYPE = {
  DRIVER: "Motorista",
  RIDER: "Passageiro",
};

const SIGN_UP_COMMAND = "Não possui uma conta? Cadastre-se";

const SIGN_IN_COMMAND = "Já possui uma conta? Entre já!";

const APP_NAME = "Paggo Case";

const SIGN_IN_SUBMIT_BUTTON = "Entrar";

const SIGN_UP_SUBMIT_BUTTON = "Cadastrar";

const MISSING_INFORMATION_SIGN_FORM = "Digite todas as informações solicitadas";

const ERROR_FORM = "Algo deu errado, tente novamente.";

const USER_WITHOUT_IMAGES = "Você ainda não possui nenhuma imagem";

const USERNAME = "Usuário";

const PASSWORD = "Senha";

const EMAIL = "E-mail";

const IMAGES = "Imagens";

const LOGOUT = "Sair";

const DESCRIPTION = "Descrição"

const API_URL = "http://localhost:8080";

const OCR_TITLE = "Transforme sua imagem em texto"

const LOAD_IMAGE = "Carregar Imagem"

const HOME_ERROR_MESSAGE = {
  USER_NOT_FOUND: "Usuário não encontrado",
};

const DRAWER_WIDTH = 240;

const ROUTE = {
  REGISTER: "/",
  HOME: "/home",
  GOOGLE: "/auth/google/",
};

const EMPTY_USER = {
  id: "",
  name: "",
  email: "",
  password: "",
};

const EMPTY_IMAGE = {
  date: "",
  uploadedImage: "",
  description: "",
  userId: "0",
  uploadedAt: "",
  textRecognition: "",
};

export {
  USER_TYPE,
  SIGN_UP_COMMAND,
  SIGN_IN_COMMAND,
  APP_NAME,
  SIGN_IN_SUBMIT_BUTTON,
  SIGN_UP_SUBMIT_BUTTON,
  API_URL,
  MISSING_INFORMATION_SIGN_FORM,
  ERROR_FORM,
  DRAWER_WIDTH,
  EMPTY_USER,
  USERNAME,
  PASSWORD,
  EMAIL,
  ROUTE,
  HOME_ERROR_MESSAGE,
  EMPTY_IMAGE,
  IMAGES,
  USER_WITHOUT_IMAGES,
  LOGOUT,
  OCR_TITLE,
  LOAD_IMAGE,
  DESCRIPTION
};
