import express from 'express';
import { Users } from '../controller/index';
import { ValidateUser, captureErrors, validateSignUpFields, ValidateLoginCred } from '../middleware';

const customer = express.Router();

const { register, login, confirmEmail } = Users;

const { existingUser, validateEmailConfirmationURL } = ValidateUser;

customer.post('/customer',
  validateSignUpFields,
  captureErrors,
  existingUser,
  register);

customer.get('/email-confirmation',
  validateEmailConfirmationURL,
  confirmEmail);

customer.post('/customers/login',
  ValidateLoginCred,
  captureErrors,
  login);

export default customer;
