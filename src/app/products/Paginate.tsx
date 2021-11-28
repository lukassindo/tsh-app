import React, {useEffect, useState} from 'react';
import {Pagination, ProductsArray, Product} from '../../models/models';


const Paginate = ({data, setData, itemsPerPage}:Pagination) => {
    const [currentClickedNumber, setcurrentClickedNumber] = useState<number>(1);
    const [pageData, setpageData] = useState<ProductsArray>([]);
    const [maxSixPages, setSixPages] = useState<boolean>(false)


    useEffect(()=>{
        const determineNumberOfPages = () => {
            const dataLength = data.length;
            const chunkArray:ProductsArray  = [];
        
            for (let index = 0; index < dataLength; index += itemsPerPage) {
              const newChunk:Product[]  = data.slice(index, index + itemsPerPage);
              chunkArray.push(newChunk);
            }
        
            if(chunkArray.length <= 6) {
                setSixPages(true);
            } else {
                setSixPages(false);
            }

            setpageData(chunkArray);
            const productsToGo: Product[] = chunkArray[0]
            setData(productsToGo);
        };
        determineNumberOfPages();
    },[data])

    const changePage = (el: Product[], i:number) => {
        setData(el);
        setcurrentClickedNumber(i+1);
    }
  
    const goFirstPage = () => {
        setData(pageData[0]);
        setcurrentClickedNumber(1);
    }

    const goLastPage = () => {
        setData(pageData[pageData.length-1]);
        setcurrentClickedNumber(pageData.length);
    }

    const maxSixElementsPagination = (
        pageData.map((el, i)=> (
            <li key={i} className={`${currentClickedNumber === i+1 ? "current" : ""}`} onClick={()=>changePage(el, i)}>{i+1}</li>
        ))
    ) 

    const aboveSixPages = (
        pageData.map((el, i)=> {
            if(currentClickedNumber === 1 || currentClickedNumber === 2) {
                if(i <= 2 || i === pageData.length - 1 || i === pageData.length - 2 || i === pageData.length - 3) {
                    return (
                        <li key={i} className={`${currentClickedNumber === i+1 ? "current" : ""}`} onClick={()=>changePage(el, i)}>{i+1}</li>
                    )
                } else if(i === 3) {
                    return (
                        <li key={i}>...</li>     
                    )
                } 
            } else {
                if(pageData.length - currentClickedNumber > 3) {
                    if((i >= currentClickedNumber-2 && i <= currentClickedNumber) || (i >= pageData.length - 3)) {
                        return (
                            <li key={i} className={`${currentClickedNumber === i+1 ? "current" : ""}`} onClick={()=>changePage(el, i)}>{i+1}</li>
                        )
                    } else if(i === currentClickedNumber +1  ) {
                        return (
                            <li key={i}>...</li> 
                        )
                    }
                } else {
                    if(i >= pageData.length-6) {
                        return (
                            <li key={i} className={`${currentClickedNumber === i+1 ? "current" : ""}`} onClick={()=>changePage(el, i)}>{i+1}</li>
                        )  
                    }
                }
               
            }
        })
    )
    

    return (
        <nav className="pagination" aria-label="pagination">
            <ul className="d-flex justify-content-center py-4 px-0">
                <li className="first" onClick={goFirstPage}>First</li>
                    {(maxSixPages) ? maxSixElementsPagination : aboveSixPages}
                <li className="first" onClick={goLastPage}>Last</li>
            </ul>
        </nav>
    )
}

export default Paginate;