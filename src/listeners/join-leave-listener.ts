import {GuildMember, PartialGuildMember, TextChannel} from "discord.js";
import {mentionUser} from "../utils/string-utils";

const {log} = require('../utils/logger')
const channel_id: string = '1124255173448044554'

export function handleMemberJoin(member: GuildMember) {
    log(`Member ${member.user.tag} joined the server`, 'debug')

    const channel = member.guild.channels.cache.get(channel_id)

    if (!channel) {
        log(`Channel with id ${channel_id} not found`, 'error')
        return
    }

    if (!(channel instanceof TextChannel)) {
        log(`Channel with id ${channel_id} is not a text channel`, 'error')
        return
    }

    channel.send(`Welcome to the server, ${mentionUser(member)}!`)
}

export function handleMemberLeave(member: GuildMember | PartialGuildMember) {
    log(`Member ${member.user.tag} left the server`, 'debug')

    const channel = member.guild.channels.cache.get(channel_id)

    if (!channel) {
        log(`Channel with id ${channel_id} not found`, 'error')
        return
    }

    if (!(channel instanceof TextChannel)) {
        log(`Channel with id ${channel_id} is not a text channel`, 'error')
        return
    }

    channel.send(`Goodbye, ${mentionUser(member)}!`)
}