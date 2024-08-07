import { BOT_API, CHAT_ID } from '@/shared/constants/constants'

import { Telegraf } from 'telegraf'

const bot = new Telegraf(BOT_API)
export const dynamic = 'force-dynamic'
export const POST = async (request: Request) => {
  const body = await request.json()
  await bot.telegram.sendMessage(
    CHAT_ID,
`Имя: **${body.name}**

Телефон: **${body.phone}**

Почта: **${body.email}**`,
  )
  return Response.json(body)
}
