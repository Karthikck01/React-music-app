import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/searchBar/SearchBar";
import { SONGS_API_URL } from "../api/Api";
import SongCard from "../components/SongCard";

const Songs = () => {
  const [songName, setSongName] = useState();
  const [songs, setSongs] = useState(null);

  const FetchSongs = async () => {
    try {
      const response = await fetch(
        `${SONGS_API_URL}query=${songName}&page=1&limit=4`
      );
      const data = await response.json();
      if (data.status === "SUCCESS") {
        setSongs(data.data.results);
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchSongs();
  }, [songName]);
  console.log(songs);

  return (
    <Container className="py-5" style={{ height: `${innerHeight - 56}px` }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SearchBar setSongName={setSongName} />
        </Col>
      </Row>
      <Row>
        <Row>
          {songs === null ? (
            <>no songs</>
          ) : (
            <>
              {songs.map((song) => {
                return (
                  <Col xs={12} sm={12} md={6} className="my-3">
                    <SongCard props={song} />
                  </Col>
                );
              })}
            </>
          )}
        </Row>
      </Row>
    </Container>
  );
};

export default Songs;
