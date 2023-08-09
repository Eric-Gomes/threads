import * as z from 'zod';


// photo is string of type url and must not be empty 
export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, { message: 'MIN 3 CHARATERS'}).max(30),
    username: z.string().min(3, { message: 'MIN 3 CHARATERS'}).max(30),
    bio: z.string().min(3).max(1000),
})