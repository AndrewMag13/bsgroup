'use client'
import { MenuButton, MenuItems, Menu, MenuItem } from '@headlessui/react'

const MenuSwitcher = () => {
  return (
    <>
      <Menu>
        <MenuButton></MenuButton>
        <MenuItems anchor="bottom">
          <MenuItem></MenuItem>
        </MenuItems>
      </Menu>
    </>
  )
}

export default MenuSwitcher
