import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import SearchBar from "../components/searchBar/SearchBar";
import { SONGS_API_URL } from "../api/Api";
import SongCard from "../components/SongCard";

const Songs = () => {
  const [songName, setSongName] = useState("latest hits");
  const [songs, setSongs] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSongs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${SONGS_API_URL}query=${songName}&page=1&limit=10`
      );
      const data = await response.json();
      if (data.status === "SUCCESS") {
        setSongs(data.data.results);
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [songName]);

  return (
    <Container className="py-5">
      <Row className="mb-3">
        <Col md={{ span: 6, offset: 3 }} className=" cor">
          <SearchBar setSongName={setSongName} />
        </Col>
      </Row>
      <Row>
        {loading ? (
          <Spinner className=" mx-auto my-3" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            {songs === null ? (
              <Col xs={12} className="my-3">
                <p>No songs found.</p>
              </Col>
            ) : (
              songs.map((song) => (
                <Col xs={12} sm={12} md={6} key={song.id} className="my-3">
                  <SongCard props={song} />
                </Col>
              ))
            )}
          </>
        )}
      </Row>
    </Container>
  );
};

export default Songs;
