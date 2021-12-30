import { HeaderElement } from "./style"

const Header = ({ black }) => {
    return (
        <HeaderElement black={black} >
            <div className="header__logo" >
                <a href="/">
                    <img src="https://fontmeme.com/permalink/211229/45215d9afc4c06d6fecbe3e0730db36c.png" alt="cloneflix logo" />
                </a>
            </div>
            <div className="header__user" >
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="usuário" />
            </div>
        </HeaderElement>
    )
}

export default Header