import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';


const Review = props => {

    const { loading, data } = useQuery()
    return (
        <div className='reviewContainer'>
            
        </div>
    );
}

export default Review;