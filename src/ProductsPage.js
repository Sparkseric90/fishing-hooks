import { Link } from "react-router-dom";


export default function ProductsPage(props) {

    // const buttonHandler = () => {
    //     setProductData('')
    // }

    return (
        <div className='row'>
            {props.productsData.map((item, index) => {
                return (
                    <div className='col-lg-3 col-12 mt-4' key={index}>
                        <div className="card w-125 h-100">
                            <div className="card-body bg-info">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={`/product/${item.id}`}>
                                    <button type="button" class="btn btn-outline-light">More Info</button></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
