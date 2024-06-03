import { Container } from 'react-bootstrap'

const Home = ({ user, token }) => {
    return (
        <Container className="mt-3 text-center">
            { !user ?
                <h2>Top Of The Events Management</h2>
                :
                <h2>{user.username}'s events</h2>
            }
        </Container>
    );
};

export default Home;