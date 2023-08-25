import * as yup from 'yup';
import { phoneRegExp } from '@/utils/regex';

export const checkoutSchema = yup.object().shape({
  firstName: yup.string().required('Firstname is required'),
  lastName: yup.string().required('Lastname is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  address1: yup.string().required('Address is required'),
  address2: yup.string().required('Address is required'),
});
