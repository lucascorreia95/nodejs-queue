import nodemailer, { TransportOptions } from 'nodemailer';
import mailConfig from '../../config/mail';

export default nodemailer.createTransport(mailConfig as TransportOptions);
