export const validName = new RegExp('^[a-zA-Z ]+$');
export const validMobile= new RegExp('^[0-9]');
export const validUsername = new RegExp('^[a-zA-Z0-9 ]+$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,12}$');
export const validEmail = new RegExp('^[a-zA-Z0-9@. ]+$');