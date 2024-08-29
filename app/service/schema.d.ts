/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieve the details of the currently logged in user. */
        get: operations["GetMe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** UpdateMe */
        patch: operations["UpdateMe"];
        trace?: never;
    };
    "/me/password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** UpdateMyPassword */
        post: operations["UpdateMyPassword"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/authorize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Authorise User
         * @description Authorise User
         */
        get: operations["AuthoriseUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Login User
         * @description Login the user
         */
        post: operations["LoginUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Logout User
         * @description Logout the user
         */
        post: operations["LogoutUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/oauth2callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Handle Token Fetching
         * @description Token fetching and validation
         */
        get: operations["OAuth2Callback"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Register User
         * @description Register the user
         */
        post: operations["RegisterUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/proxy/academicCareer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Academic Level Info
         * @description Get Academic Level Info
         */
        get: operations["GetAcademicLevelInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/proxy/campus": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Campus Information
         * @description Get Campus Information
         */
        get: operations["GetCampusInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/proxy/course": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Course Info
         * @description Get Course Info
         */
        get: operations["GetCourseInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/proxy/subject": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Subject Info
         * @description Get Subject Info
         */
        get: operations["GetSubjectInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/proxy/term": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Term Info
         * @description Get Term Info
         */
        get: operations["GetTermInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/user/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieve the details of a user. */
        get: operations["GetUser"];
        put?: never;
        post?: never;
        /**
         * Remove User
         * @description Removes a user and all associated data from the system.
         */
        delete: operations["DeleteUser"];
        options?: never;
        head?: never;
        /** UpdateUser */
        patch: operations["UpdateUser"];
        trace?: never;
    };
    "/admin/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Users
         * @description Retrieve the users.
         */
        get: operations["ListUsers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/user/password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** UpdatePassword */
        post: operations["UpdatePassword"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Campus */
        Campus: {
            name: string;
            description: string;
        };
        /** Career */
        Career: {
            value: string;
            name: string;
        };
        /** CourseSearch */
        CourseSearch: {
            courseId: string;
            courseOfferNumber: string;
            year: string;
            term: string;
            termDescription: string;
            subject: string;
            catalogNumber: string;
            academicCareer: string;
            academicDescription: string;
            courseTitle: string;
            units: number;
            campus: string;
            classNumber: number;
        };
        /** Subject */
        Subject: {
            name: string;
            description: string;
        };
        /** Term */
        Term: {
            id: string;
            description: string;
            year: string;
            current: boolean;
        };
        /** User */
        User: {
            /** Format: uuid */
            id: string;
            email: string;
            name: string;
            isSuperuser: boolean;
            isVerified: boolean;
            avatarUrl: string;
        };
        /** UserChangePassword */
        UserChangePassword: {
            oldPassword: string;
            newPassword: string;
        };
        /** UserCreate */
        UserCreate: {
            name: string;
            email: string;
            password: string;
        };
        /** UserLogin */
        UserLogin: {
            nameOrEmail: string;
            password: string;
        };
        /** UserUpdate */
        UserUpdate: {
            email?: null | string;
            name?: null | string;
            avatarUrl?: null | string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    GetMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    UpdateMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserUpdate"];
            };
        };
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Bad request syntax or unsupported method */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status_code: number;
                        detail: string;
                        extra?: null | {
                            [key: string]: unknown;
                        } | unknown[];
                    };
                };
            };
        };
    };
    UpdateMyPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserChangePassword"];
            };
        };
        responses: {
            /** @description Document created, URL follows */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Bad request syntax or unsupported method */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status_code: number;
                        detail: string;
                        extra?: null | {
                            [key: string]: unknown;
                        } | unknown[];
                    };
                };
            };
        };
    };
    AuthoriseUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Redirect Response */
            200: {
                headers: {
                    /** @description target path for the redirect */
                    location?: string;
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    LoginUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserLogin"];
            };
        };
        responses: {
            /** @description Document created, URL follows */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Bad request syntax or unsupported method */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status_code: number;
                        detail: string;
                        extra?: null | {
                            [key: string]: unknown;
                        } | unknown[];
                    };
                };
            };
        };
    };
    LogoutUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Document created, URL follows */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OAuth2Callback: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RegisterUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserCreate"];
            };
        };
        responses: {
            /** @description Document created, URL follows */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Bad request syntax or unsupported method */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status_code: number;
                        detail: string;
                        extra?: null | {
                            [key: string]: unknown;
                        } | unknown[];
                    };
                };
            };
        };
    };
    GetAcademicLevelInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Career"][];
                };
            };
        };
    };
    GetCampusInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Campus"][];
                };
            };
        };
    };
    GetCourseInfo: {
        parameters: {
            query?: {
                course_title?: null | string;
                subject_areas?: null | string;
                catalogue_number?: null | number;
                class_number?: null | string;
                year?: number;
                term?: null | string;
                academic_career?: null | string;
                campus?: null | string;
                page_number?: number;
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CourseSearch"][];
                };
            };
            /** @description Bad request syntax or unsupported method */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status_code: number;
                        detail: string;
                        extra?: null | {
                            [key: string]: unknown;
                        } | unknown[];
                    };
                };
            };
        };
    };
    GetSubjectInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Subject"][];
                };
            };
        };
    };
    GetTermInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Term"][];
                };
            };
        };
    };
    GetUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user to retrieve. */
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Bad request syntax or unsupported method */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status_code: number;
                        detail: string;
                        extra?: null | {
                            [key: string]: unknown;
                        } | unknown[];
                    };
                };
            };
        };
    };
    DeleteUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user to delete. */
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request fulfilled, nothing follows */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad request syntax or unsupported method */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status_code: number;
                        detail: string;
                        extra?: null | {
                            [key: string]: unknown;
                        } | unknown[];
                    };
                };
            };
        };
    };
    UpdateUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user to update. */
                user_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserUpdate"];
            };
        };
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Bad request syntax or unsupported method */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status_code: number;
                        detail: string;
                        extra?: null | {
                            [key: string]: unknown;
                        } | unknown[];
                    };
                };
            };
        };
    };
    ListUsers: {
        parameters: {
            query?: {
                createdBefore?: null | string;
                createdAfter?: null | string;
                updatedBefore?: null | string;
                updatedAfter?: null | string;
                ids?: null | string[];
                currentPage?: number;
                pageSize?: number;
                searchField?: null | string;
                searchString?: null | string;
                searchIgnoreCase?: null | boolean;
                orderBy?: null | string;
                sortOrder?: "asc" | "desc" | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request fulfilled, document follows */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items?: components["schemas"]["User"][];
                        /** @description Maximal number of items to send. */
                        limit?: number;
                        /** @description Offset from the beginning of the query. */
                        offset?: number;
                        /** @description Total number of items. */
                        total?: number;
                    };
                };
            };
            /** @description Bad request syntax or unsupported method */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status_code: number;
                        detail: string;
                        extra?: null | {
                            [key: string]: unknown;
                        } | unknown[];
                    };
                };
            };
        };
    };
    UpdatePassword: {
        parameters: {
            query: {
                /** @description The user to update. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserChangePassword"];
            };
        };
        responses: {
            /** @description Document created, URL follows */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Bad request syntax or unsupported method */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status_code: number;
                        detail: string;
                        extra?: null | {
                            [key: string]: unknown;
                        } | unknown[];
                    };
                };
            };
        };
    };
}
