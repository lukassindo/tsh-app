import React,{FC} from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import empty from '../../img/empty.png';
import error from '../../img/error.svg';

interface Props {
    error: string;
}

const Empty:FC<Props> = (props) => {

    const noProducts = (
        <>
        <Image src={empty} alt="no products"/>
        <p className="alert_info pt-3 mb-0">Ooops… It’s empty here</p>
        <span className="d-block">There are no products on the list</span>
        </>
    )

    const errorInfo = (
        <>
        <Image src={error} style={{maxWidth: "60px"}}alt="error image"/>
        <p className="alert_info pt-3 mb-0">{props.error}</p>
        </>
    )

    return (
        <Container className="pt-5 d-flex justify-content-between flex-wrap px-4">
            <div className="no_products d-flex flex-column justify-content-center align-items-center mw-100">
                {(!props.error) ? noProducts : errorInfo}
            </div>
        </Container>
    )
}

export default Empty;