import {User} from "discord.js";

export function mentionUser(user: User) {
    return `<@${user.id}>`
}

export function blankField(inline: boolean = false) {
    return {
        name: "",
        value: "",
        inline: inline
    }
}