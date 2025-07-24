import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { MenuList } from './MenuList'

/**
 * 网站顶部
 * LOGO 和 菜单
 * @returns
 */
export const Header = props => {
  return (
    <header className='w-full px-6 bg-white  dark:bg-black relative z-20'>
      


      {/* 菜单 */}
      <MenuList {...props} />
    </header>
  )
}
