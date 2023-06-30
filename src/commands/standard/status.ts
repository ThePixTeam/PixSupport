import Command from '../command'
import {Client, CommandInteraction, Guild, User} from 'discord.js'
import axios from "axios";

export default class StatusCommand implements Command {
    name = 'status'
    description = "Get the bot's status"
    run = async (
        client: Client,
        user: User,
        guild: Guild,
        command: CommandInteraction
    ) => {
        command.reply('...').then((message) => {
            axios.get('https://api.pixbot.me').then((response) => {
                let ping = response.headers['x-response-time']
                message.edit(`:v: The bot is online with a ping of ${ping}ms`)
            }).catch(() => {
                message.edit(':x: The bot is offline :x:')
            })
        })
    }
}
