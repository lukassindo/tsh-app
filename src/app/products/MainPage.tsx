import React, {FC, useState, useMemo} from 'react';
import '../../App.css';
import Header from './Header';
import Products from './Products';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiltersContext } from '../../contexts/filtersContext';


interface Props {
  history: Record<string, unknown>,
  location: {
    state: boolean
  },
  match: Record<string, unknown>,
  staticContext: undefined
}

const MainPage: FC<Props> = (props) => {
  const [active, setActive] = useState<boolean>(false);
  const [promo, setPromo] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const data = useMemo(()=> ({setActive, setPromo, setSearch}),[active, promo, search]);
  const avatar = props.location.state;
  
  return (
    <FiltersContext.Provider value={data}>
      <Container>
       
          <Header avatar={avatar}/>
    
      </Container>
      <Container fluid id="products">
          <Products active = {active} promo = {promo} search={search}/>
      </Container>
    </FiltersContext.Provider>
  )

}

export default MainPage;
