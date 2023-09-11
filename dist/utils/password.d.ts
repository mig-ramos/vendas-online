export declare const createPasswordHashed: (password: string) => Promise<string>;
export declare const validatePassword: (password: string, passwordHashed: string) => Promise<boolean>;
