import z from 'zod';

export const signupSchema = z.object({
    firstName: z.string()
        .min(1, 'Please provide a firstName.')
        .max(10,'first name must have maximum 10 characters')
        .min(2,'first name must have minimum 2 characters'),

    lastName: z.string()
        .min(1, 'Please provide a lastName.')
        .max(10,'last name must have maximum 10 characters')
        .min(2,'last name must have minimum 2 characters'),

        email: z.string().min(1, 'Please provide an email.').email('Invalid email.'),

    password: z.string()
        .min(1, 'Please provide a password.')
        .min(8,'Password must have minimum 8 characters.')
        .max(12,'Password must have maximum 12 characters.')
        .regex(/[A-Z]/,"Password must include atleast one uppercase letter.")
        .regex(/[a-z]/,"Password must include atleast one lowercase letter.")
        .regex(/\d/,"Password must include atleast one digit.")
        .regex(/[!@#$%&*?]/,"Password must include atleast one special character."),

    role: z.enum(['admin','user']).default('user')
})

export const loginSchema = z.object({
    email: z.string().min(1, 'Please provide an email.').email('Invalid email.'),

    password: z.string()
        .min(1, 'Please provide a password.')
        .min(8,'Password must have minimum 8 characters.')
        .max(12,'Password must have maximum 12 characters.')
        .regex(/[A-Z]/,"Password must include atleast one uppercase letter.")
        .regex(/[a-z]/,"Password must include atleast one lowercase letter.")
        .regex(/\d/,"Password must include atleast one digit.")
        .regex(/[!@#$%&*?]/,"Password must include atleast one special character."),


})  

export const updateUserSchema = z.object({
    firstName: z.string()
        .max(10,'first name must have maximum 10 characters')
        .min(2,'first name must have minimum 3 characters').optional(),

    lastName: z.string()
        .max(10,'last name must have maximum 10 characters')
        .min(2,'last name must have minimum 3 characters').optional(),
    
    password: z.string()
        .min(8,'Password must have minimum 8 characters.')
        .max(12,'Password must have maximum 12 characters.')
        .regex(/[A-Z]/,"Password must include atleast one uppercase letter.")
        .regex(/[a-z]/,"Password must include atleast one lowercase letter.")
        .regex(/\d/,"Password must include atleast one digit.")
        .regex(/[!@#$%&*?]/,"Password must include atleast one special character.").optional(),

})

export const listingSchema = z.object({
    title: z.string()
        .min(1, 'Please provide a title.')
        .max(30,'Title cannot exceed 30 characters'),

    description: z.string()
        .min(1, 'Please provide a description.')
        .min(1, 'Please provide a title.')
        .max(300,'Description cannot exceed 100 characters'),

    location: z.string()
        .min(1,'Please provide a location.')
        .max(30,'Location cannot exceed 30 characters.'),

    price: z.string()
        .transform(Number)
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val > 0, {
            message: 'Price must be a positive number'}),

    currency: z.enum(['INR','USD'])
        .default('INR'),


})