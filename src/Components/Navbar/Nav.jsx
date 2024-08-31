
import './Nav.css'
import Button from '../Buttons/Button'
import Carousels from '../Carousels/Carousels'
import { Link } from 'react-router-dom';

function Nav({showL,showS,hideA,Hshow,toDo,contry}) {

  return (
    <div className="container mt-4 mb-5">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row">
              <h4>React Mini Project</h4>
             
              </div>
              
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to={'/'}>
                        <Button label={'Home'} btnClass={'btn-danger'} handle={hideA}/>
                        </Link>
                    </li>&nbsp;&nbsp;
                    <li className="nav-item ">
                        <Link to={'/SugnUp'}>
                        <Button label={'Sign Up'} btnClass={'btn-primary'} handle={showS}/>
                        </Link>
                    </li>&nbsp;&nbsp;&nbsp;
                    <li className="nav-item">
                        <Link to={'/Login'}>
                        <Button label={'Login'} handle={showL}/>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Languages</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">HTML</a></li>
                            <li><a className="dropdown-item" href="#">CSS</a></li>
                            <li><a className="dropdown-item" href="#">JavaScript</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">React</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                   
                    <Button label={'Modal'} btnClass={'btn-success'} handle={Hshow}/>
                   
                    &nbsp;&nbsp;
                    </li>
                    
                    <li className="nav-item">
                        <Link to={'/Todo'}>
                        <Button label={'ToDo List'} btnClass={'btn-primary'} handle={toDo}/>
                        </Link>
                    </li>&nbsp;&nbsp;
                    <li className="nav-item">
                        <Link to={'/Contires'}>
                        <Button label={'Countires'} btnClass={'btn-primary'} handle={contry}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <hr />
        <Carousels/>
    </div>
  )
}

export default Nav