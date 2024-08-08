import { BOT_API, CHAT_ID } from '@/shared/constants/constants'
import { FmtString, bold } from 'telegraf/format'

import { Telegraf } from 'telegraf'

const bot = new Telegraf(BOT_API)
export const dynamic = 'force-dynamic'
export const POST = async (request: Request) => {
  const body = await request.json()
//   const str = await new FmtString(
//     `Имя:    ${bold(body.name)}

// Телефон: ${body.phone}

// Почта:   ${body.email}`,
//   )
  await bot.telegram.sendMessage(
    CHAT_ID,
`Имя: \`${body.name}\`

Телефон: *${body.phone}*

Почта: *${body.email}*`, {parse_mode: 'Markdown'},
  )
  return Response.json(body)
}
