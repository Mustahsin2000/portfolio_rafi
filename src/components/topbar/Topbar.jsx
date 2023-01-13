import './Topbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"Topbar " + (menuOpen && "active")}>
       <div className="wrapper">
        <div className="left">
               <a href="#Intro" className='logo'>portFool</a>
               <div className="itemContainer">
                <PersonIcon className='icon'></PersonIcon>
                <span>+44 924 12 74</span>
               </div>
               <div className="itemContainer">
                <EmailIcon className='icon'></EmailIcon>
                <span>rafi@gmail.com</span>
               </div>
        </div>
       
        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
        </div>
       </div>
    </div>
  )
}
