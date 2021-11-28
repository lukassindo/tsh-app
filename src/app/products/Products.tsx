import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from './ProductCard';
import Paginate from './Paginate';
import LoaderContainer from './LoaderContainer';
import {getProducts} from '../../services/products';
import { Filters, Product } from '../../models/models';
import Empty from './Empty';


const Products = ({active, promo, search}:Filters) => {
    const productsPerPage = 8;
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [productsdata, setProductsData] = useState<Product[]>([]);
    const [errorMessage, setError] = useState<string>('');

    useEffect(()=> {
        const getProd = async () => {
            const data = await getProducts(search, active, promo);
            if(data.errorMessage) {
                setError(data.errorMessage);
                setLoading(false);
            } else {
                setProducts(data.results);
                setLoading(false);
            }   
        }
        getProd();
    },[active, promo, search]);

    const setData = (data: Product[]):void => {
        setProductsData(data);
    }


    const productsResults = (
        <div>
            <Container >
                <div className="pt-5 d-flex justify-content-center flex-wrap px-4">
                    {productsdata.map(product => (
                        <ProductCard key={product.id} {...product}/>
                    ))
                    }
                </div>
                <Row>
                    <Paginate data={products} setData={setData} itemsPerPage={productsPerPage}/>
                </Row>
            </Container>
            
        </div>
    )
 
    const noProducts = (
        <Empty error={errorMessage}/>
    )

    return (loading) ? <LoaderContainer/> : (products.length > 0) ? productsResults : noProducts
    
}

export default Products;
