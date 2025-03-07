import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const adminValidator = [
    body('email')
        .isEmail()
        .withMessage('Email must be a valid email address'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),
    body('fullName')
        .isString()
        .withMessage('Username must be a string')
];