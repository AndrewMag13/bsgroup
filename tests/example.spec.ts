import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('localhost:3000/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    'Create a website and develop a design profitably | BSGroup digital-studio',
  )
})

test('correct bg', async ({ page }) => {
  await page.goto('localhost:3000')
  const napisat = await page
    .locator('#main')
    .getByRole('button', { name: 'Write' })
  await expect(napisat).toHaveCSS(
    'background-image',
    'linear-gradient(90deg, rgb(33, 156, 255) 0%, rgb(98, 214, 197) 100%)',
  )
})
test('correct trans', async ({ page }) => {
  await page.goto('localhost:3000')
  const napisat = await page
    .locator('#main')
    .getByRole('button', { name: 'Write' })
  await expect(napisat).toHaveCSS('transition', '--based 1s, --funded 1s')
})
