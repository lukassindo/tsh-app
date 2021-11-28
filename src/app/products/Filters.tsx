import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiltersContext } from '../../contexts/filtersContext';



const Filters = () => {
    const { setActive, setPromo } = useContext(FiltersContext);

    const filtersConfig = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
          (e.target.value === 'active') ? setActive(true) : setPromo(true);
        } else {
          (e.target.value === 'active') ? setActive(false) : setPromo(false);
        }
    }   

    return(
        <>
          <InputGroup className="pt-2" >
            <Form.Check value="active" onChange ={(e) => filtersConfig(e)} type="checkbox" label="Active" />
            <Form.Check value="promo" onChange ={(e) => filtersConfig(e)} className="ms-4" type="checkbox" label="Promo" />
          </InputGroup>
      
        </>
    )
}

export default Filters;