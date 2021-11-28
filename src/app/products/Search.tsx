import React, {useContext, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiltersContext } from '../../contexts/filtersContext';

library.add(faSearch);

const Search = () => {
    const { setSearch } = useContext(FiltersContext);

    const [searchPhrase, setSearchPhrase] = useState<string>('');

    const setPhrase = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchPhrase(e.target.value);
    }

    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch(searchPhrase);
    }

    return(
        <Form onSubmit={submit} id="search" className="d-flex">
            <InputGroup>
                <Form.Control onChange={setPhrase} type="text" placeholder="Search" />
                <Button type="submit" variant="outline-secondary" className="btn">
                    <FontAwesomeIcon icon="search" style={{color: "#000"}}/>
                </Button>
            </InputGroup>
        </Form>
    )
}

export default Search;
