import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Product } from '../../models/models';
import star from '../../img/star.svg';
import emptystar from '../../img/emptystar.svg';
import Modal from 'react-bootstrap/Modal';

const ProductCard = ({description, image, name, rating}: Product) => {
    const [stars, setStars] = useState<string[]>([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=> {
        const stars: string[] = [];
        for(let i = 0, y = rating; i < 5; i++, y--) {
            if(y > 0) {
                stars.push(star);
            } else {
                stars.push(emptystar);
            }
        }
        setStars(stars);

    },[rating]);

    return (
        <>
        <Card className="mb-4">
            <Card.Img variant="top" src={image} alt={name}/>
            <div className="p-3 d-flex flex-column justify-content-between h-100">
                <div>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </div>
                <div>
                    <div className="rating">
                        {stars.map((star, id)=><Image key={id} className="px-1 pb-2" src={star}/>)}
                    </div>
                    <Button variant="primary" onClick={handleShow}>Show details</Button>
                </div>
            </div>
        </Card>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="p-0 border-0">
            </Modal.Header>
            <Modal.Body className="p-0">
                <Image src={image} alt={name}/>
            </Modal.Body>
            <Modal.Footer className="text-start justify-content-start px-3 py-4">
                <h3 className="modal_title">{name}</h3>
                <p>{description}</p>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ProductCard;