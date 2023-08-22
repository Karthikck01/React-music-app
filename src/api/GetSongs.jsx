// import React, { useEffect, useState } from 'react'
// import {SONGS_API_URL} from './Api'
// import { Button , Form} from 'react-bootstrap'
// import { SearchIcon } from '../assets/icon'

// const GetSongs = (props) => {
//     const [songs, setSongs] = useState(null)
//     const [songName, setSongName] = useState(null)
//     const [loading, setLoading] = useState(false)

//     const FetchSongs = async () => {
//         try {
//             const response = await fetch(`${SONGS_API_URL}query=${songName}&page=1&limit=2`)
//             const data = await response.json();
//             if (data.status === "SUCCESS") {
//                 setSongs(data.data.results)
//             } else {
//                 console.log('failed');   
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
    
//     const handleClick = () => {
//             FetchSongs()
//             console.log(songs);
//     }
    
//   return (
//     <div className="d-flex" >
//         <Form.Control
//         type="search"
//         placeholder="search"
//         className="rounded-pill"
//         name='searchsongs'
//         onChange={(e) => {setSongName(e.target.value)}}
//         required
//         />
//         <Button variant="danger" className="rounded-pill mx-2" onClick={handleClick}>
//           <SearchIcon/>
//         </Button>
//       </div>
//   )
// }

// export default GetSongs