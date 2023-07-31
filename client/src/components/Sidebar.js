import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';
import HomeLogo from '../assets/home.png'
import BGLLogo from '../assets/diabetes2.png'
import MedicineLogo from '../assets/medicine.png'
import ExcerciseLogo from '../assets/stretching-exercises.png'
import EmergencyLogo from '../assets/emergency.png'
import CommunityLogo from '../assets/discussion.png';
import NotepadLogo from '../assets/notepad.png'
import FoodLogo from '../assets/cutlery.png'
import LabLogo from '../assets/blood-test.png'

function Sidebar() {
    const navigate = useNavigate()
    return (
        <>
            <SideNav
                onSelect={(selected) => {
                    console.log(selected)
                    navigate('/'+selected)
                }}
                className="sidebar--color"
                style={{
                    position: "fixed"
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="">
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <img src={HomeLogo} width="30px" alt=""/>
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="bgl">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            <img src={BGLLogo} width="30px" alt=""/>
                        </NavIcon>
                        <NavText>
                            Blood Glucose
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="medicine">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            <img src={MedicineLogo} width="30px" alt=""/>
                        </NavIcon>
                        <NavText>
                            Medicine
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="exercise">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            <img src={ExcerciseLogo} width="30px" alt=""/>
                        </NavIcon>
                        <NavText>
                            Exercise
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="food">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            <img src={FoodLogo} width="30px" alt=""/>
                        </NavIcon>
                        <NavText>
                            Food
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="lab">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            <img src={LabLogo} width="30px" alt=""/>
                        </NavIcon>
                        <NavText>
                            Lab
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="emergency">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            <img src={EmergencyLogo} width="30px" alt=""/>
                        </NavIcon>
                        <NavText>
                            Emergency
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="notepad">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            <img src={NotepadLogo} width="30px" alt=""/>
                        </NavIcon>
                        <NavText>
                            Notepad
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="community">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            <img src={CommunityLogo} width="30px" alt=""/>
                        </NavIcon>
                        <NavText>
                            Community
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </>
    )
}

export default Sidebar