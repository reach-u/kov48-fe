import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import connect from 'react-redux/es/connect/connect';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  getUser() {
    let userData = this.props && this.props.userData ? this.props.userData : null;
    console.log(userData);
    return userData;
  }

  signOut() {
    delete localStorage.userToken;
    window.location.reload();
  }

  render() {
    return (
      <header>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MINUSÜNDMUS.EE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/view1/">View1</NavLink>
              </NavItem>

              <UncontrolledDropdown
                nav
                inNavbar
                style={{display: !!this.props.userData ? '' : 'none'}}>
                <DropdownToggle nav caret>
                  {this.props.userData
                    ? this.props.userData.firstName + ' ' + this.props.userData.lastName
                    : ''}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Minu andmed</DropdownItem>
                  <DropdownItem>Teavituste seadistamine</DropdownItem>
                  <DropdownItem>Teavituste seadistamine</DropdownItem>
                  <DropdownItem>Postkast</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.signOut}>
                    Välju&nbsp;&nbsp;
                    <FontAwesomeIcon icon="sign-out-alt" />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default connect(
  state => ({
    userData: state.appUser.userData,
  }),
  null
)(Header);
