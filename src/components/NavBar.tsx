import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { updateThemeKey } from 'redux/actions'
import ThemeContext, { themes } from 'contexts/Theme'

import { ThemeKey, ThemeColors } from 'types'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
  FaGlobeEurope,
  FaShoppingCart,
  FaPalette,
  FaCircle,
} from 'react-icons/fa'

function NavBar() {
  const dispatch = useDispatch()
  const theme = useContext(ThemeContext)
  return (
    <Navbar style={{ background: theme.background }}>
      <Container>
        <Navbar.Brand href="/">
          <FaGlobeEurope size="1.6em" style={{ color: theme.foreground }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <NavDropdown
              title={
                <FaPalette size="1.6em" style={{ color: theme.foreground }} />
              }
              id="collasible-nav-dropdown"
              style={{
                color: theme.foreground,
              }}
            >
              {Object.entries(ThemeColors).map(([k, v], i) => (
                <NavDropdown.Item
                  key={i}
                  onClick={() => dispatch(updateThemeKey(v as ThemeKey))}
                >
                  <FaCircle style={{ color: themes[v].background }} />
                  {k}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Navbar.Text>
              <FaShoppingCart
                size="1.6em"
                style={{ color: theme.foreground }}
              />
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar