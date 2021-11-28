import React, {useState} from 'react';
import Search from './Search';
import Filters from './Filters';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { AppRoute } from 'routing/AppRoute.enum';
import { Link } from 'react-router-dom';

interface Props {
    avatar: boolean | undefined;
}

const Header = ({avatar}:Props) => {
    const [avatarOn, setAvatar] = useState<boolean | undefined>(avatar)

    const LogOut = () => {
        setAvatar(true);
    }
 

    const logged = (
        <DropdownButton className="avatar" title="Dropdown button">
            <Dropdown.Item onClick={LogOut}>Logout</Dropdown.Item>
        </DropdownButton>
    )

    const notLogged = (
        <>
        <Link className="btn btn-outline-primary" to={AppRoute.login}>Login</Link>
        </>
    )
    
    return (
        <header className="d-lg-flex position-relative justify-content-between">
            <div className="d-lg-flex">
                <div className="logo">
                    <a href='/' className="text-dark">join.tsh.io</a>
                </div>
                    <Search/>
                <div className="filters">
                    <Filters/>
                </div>
            </div>
            {(!avatarOn) ? logged : notLogged}
            
        </header>
    )
}

export default Header; 