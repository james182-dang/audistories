import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Form, Button } from 'react-bootstrap';
import Auth from '../utils/auth';

const Explore = () => {

    const [ searchInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        
    }
    return (
        <div className='explore'>
            
            <div className='exploreSearch'>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Row>
                        <Col xs={12} md={8}>
                            <Form.Control
                              name='searchInput'
                              className='exploreSearch'
                              value={searchInput}
                              onChange={(e) => setSearchInput(e.target.value)}
                              type='text'
                              size='lg'
                              placeholder='Search for an artist or album'
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <Button type='submit' variant='success' size='lg'>
                                Submit Search
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        </div>
    );
}

export default Explore;