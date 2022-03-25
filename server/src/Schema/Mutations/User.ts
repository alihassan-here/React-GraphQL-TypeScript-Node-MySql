import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";
import { MessageType } from "../TypeDefs/Messages";


export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }

    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args;
        await Users.insert({ name, username, password });
        return args;
    }
};

//Delete User
export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        const { id } = args;
        await Users.delete(id);
        return {successfull: true, message: "User Deleted Successfully"};
    }
};

//Update User
export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        currentPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { username, currentPassword,newPassword } = args;
        const user = await Users.findOne({ username });
        if (!user) {
            throw new Error("User not found");
        }
        const userPassword = user?.password;
        if (userPassword === currentPassword) {
            await Users.update({ username }, { password: newPassword });
            
            return {successfull: true, message: "Password Updated Successfully"};
        } else {
            throw new Error("Password is incorrect");
        }
    }
};