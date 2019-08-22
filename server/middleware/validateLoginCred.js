import { checkTemplate } from './validateSignUpFields';

export default [
  checkTemplate('email')
    .withMessage('email is required')
    .isString()
    .withMessage('email should be a string')
    .matches(/^([A-z0-9]+)([._-]{0,1})([A-z0-9]+)@([A-z0-9-_.]+)\.([A-z]{2,3})$/)
    .withMessage('invalid email format')
    .trim(),

  checkTemplate('password')
    .withMessage('password is required')
    .isString()
    .withMessage('password should be a string')
    .isLength({ min: 6 })
    .withMessage('minimum character length for password should be 6'),
];
