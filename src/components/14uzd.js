
import './14uzd.css';

const Navbar = () => {
  let navbarData = {
    header_text: 'Projektas ABC',
    links: [
        { id: 1, url: '/', title: 'Pradžia' },
        { id: 2, url: '/paslaugos', title: 'Paslaugos' },
        { id: 3, url: '/projektai', title: 'Projektai' },
        { id: 4, url: '/apie-mus', title: 'Apie mus' },
        { id: 5, url: '/kontaktai', title: 'Kontaktai' },
    ]
  }

  return (
    <nav>
        <NavbarHeader pavadinimas={navbarData.header_text}/>
        <div>
            <ul>
            {navbarData.links.map((linkas)=>(
                <NavbarLinks key={linkas.id} duomenys={linkas}/>
            ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar

const NavbarHeader = (props) => {
  return (
    <h1>{props.pavadinimas}</h1>
  )
}

const NavbarLinks = (props) => {
  return (
    <li><a href={props.duomenys.url}>{props.duomenys.title}</a></li>
  )
}
