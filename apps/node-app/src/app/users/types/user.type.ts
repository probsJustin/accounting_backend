import { Account } from "../../account/types/account.type";

export class User {
    username: string;
    firstname: string;
    lastname: string;
    userUuid: string;
    email: string;
    description: string;
    accounts: Account[];
}