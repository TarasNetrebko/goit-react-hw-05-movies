import { fetchReviews } from 'helpers/fetchHandler';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment-js';
import {
  ReviewContainer,
  PostContainer,
  ContentContainer,
    List,
  Content
} from './Reviews.styled';
const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetchReviews(params.movieId).then(res => {
      if (res.results.length > 0) {
        setReviews(res.results);
      }
    });
    // eslint-disable-next-line
  }, []);

    return (
      <>
        {!reviews && <b>We don't heve any reviews yet!</b> }
    <List>
      {reviews &&
        reviews.map(
          ({
            author,
            content,
            id,
            created_at,
            updated_at,
            author_details: { rating },
          }) => (
            <ReviewContainer key={id}>
              <PostContainer>
                <p>
                  Writed by: <b>{author}</b>
                </p>
                <p>
                  Created:{' '}
                  {moment(created_at, 'YYYY-MM-DDTHH:MM:SS.MSZ').format(
                    'DD/MM/YY'
                  )}
                </p>
                {updated_at && (
                  <p>
                    Updated:{' '}
                    {moment(updated_at, 'YYYY-MM-DDTHH:MM:SS.MSZ').format(
                      'DD/MM/YY'
                    )}
                  </p>
                )}
              </PostContainer>
              <ContentContainer>
                <Content>{content}</Content>
                {rating && (
                  <p>
                    <b>{rating}/10</b>
                  </p>
                )}
              </ContentContainer>
            </ReviewContainer>
          )
        )}
            </List>
        </>
  );
};
export default Reviews;