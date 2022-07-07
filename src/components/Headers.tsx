import * as React from 'react';
import { Navbar, Container } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">REACT TYPESCRIPT BOOTSTRAP</Navbar.Brand>

            </Container>
        </Navbar>
    );
};

export default Header;
