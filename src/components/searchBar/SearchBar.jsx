import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap';
import { SearchIcon } from '../../assets/icon';

const SearchBar = (props) => {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(false)
    const handleSubmit = (e) =>{
      e.preventDefault();
      value.length > 0 ?  props.setSongName(value) : setValid(true)
    }

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
        type="search"
        placeholder="search"
        className="rounded-pill"
        name='searchsongs'
        onChange={(e) => {setValue(e.target.value)
                          setValid(false) }}
        isInvalid = {valid}
        />
        <Button type='submit' variant="danger" className="rounded-pill mx-2">
          <SearchIcon/>
        </Button>
      </Form>
  )
}

export default SearchBar