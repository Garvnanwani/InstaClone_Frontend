import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Nav from '../components/Nav';
import NoFeedSuggestions from "../components/NoFeedSuggestions";
import Post from "../components/Post";
import Suggestions from "../components/Suggestions";
import { FeedContext } from "../context/FeedContext";
import { UserContext } from "../context/UserContext";
import Container from '../styles/Container';
import { client } from "../utils";

const Wrapper = styled.div`
  @media screen and (max-width: 1040px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Home = () => {
  const { setUser } = useContext(UserContext);
  const { feed, setFeed } = useContext(FeedContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    client("/user/feed")
      .then((res) => {
        setFeed(res.data);
        setLoading(false);
      })
      .catch(res => console.log(res));
  }, [setFeed, setUser]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Nav />
      <Container>
        <Wrapper>
          {feed.length > 0 ? (
            <>
              <div className="home">
                {feed.map((post) => (
                  <Post key={post._id} post={post} />
                ))}
              </div>
              <Suggestions />{" "}
            </>
          ) : (
              <NoFeedSuggestions />
            )}
        </Wrapper>
      </Container >
    </>
  );
};

export default Home;
