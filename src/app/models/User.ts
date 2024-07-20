export interface User {
    id: string;
    avatarUrl: string | undefined;
    createAt: string;
    documentId: String | undefined;
    firstname: string;
    lastname: string;
    updatedAt: string | undefined;
    userId: string;
    email: string;
    password: string;
    username: string;
    // location: {
    //     latitude: number;
    //     longitude: number;
    // };
    // books: Book[];
    // loans: Loan[];
    // notifications: Notification[];
}