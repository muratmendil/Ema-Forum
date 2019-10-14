import { validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from "class-validator";

export class ForumModel {
    @Length(2, 50)
    title: String

    @IsDate()
    created_at: Date;

    @Min(2)
    message: String

    @Min(2)
    firstname: String

    @Min(2)
    lastname: String

    @IsInt()
    userId: Number
}
