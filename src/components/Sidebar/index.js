import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        O nas
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Usługi
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Projekty
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Kontakt
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    {/* <SidebarRoute>Sign In</SidebarRoute> */}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
