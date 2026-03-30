import Image from '@/assets/image_small.png'
import {Link} from 'react-router-dom'
import DarkToggle from './DarkToggle';

interface NavItem {
    label: string;
    path: string;
}

const pages: NavItem[] = [
    { label: 'Projects', path: 'projects'},
    { label: 'Hobbies', path: 'hobbies'},
    { label: 'Blogs', path: 'blogs'},
    { label: 'About', path: 'about'}
]

const Navbar = () => {
    return(
        <nav className='inline-flex'>
            <img src = {Image} alt = "logo"/>
            <ul className='inline-flex m-auto'>
                {pages.map((page) => (
                    <li key={page.path}>
                        <Link to={page.path}
                            className='mx-2'
                        >
                            {page.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <DarkToggle/>
        </nav>
    )
}

export default Navbar