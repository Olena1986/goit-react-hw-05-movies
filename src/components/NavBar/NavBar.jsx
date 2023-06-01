import { Outlet } from 'react-router-dom'
import { NavBarStyle } from './NavBar.styled';


export const NavBar = () => {
	const navMap = [
		{ href: '/', title: 'Home' },
		{ href: '/movies', title: 'Movies' },
		
	]
	return (
		<NavBarStyle.NavWrap>
			{navMap.map(link => (
				<NavBarStyle.LinkWrap key={link.href} to={link.href}>
					{link.title}
				</NavBarStyle.LinkWrap>
            ))}
            <Outlet />
		</NavBarStyle.NavWrap>
	)
}
