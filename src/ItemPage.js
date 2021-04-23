import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Fish from './fishy.gif';

export default function ItemPage(props) {
    let { id } = useParams();
    const product = props.productsData.find(item => item.id === parseInt(id))
    console.log(product)
    return (
        <div className="row-md-12 row-sm-12">
            <div className="card text-center">
                <div className="card-header">
                    {product && product.name}
                </div>
                <div className="card-body text-center">
                    <img src={Fish} alt={"Fish"} class="mx-auto d-block"></img>
                    {product.description}
                    <h5 className="card-title"></h5>
                    ${product.price}
                    <p className="card-text"></p>
                    <Link to="/"><button type="button" class="btn btn-outline-info">Back to Products Page</button></Link>
                    <Link to="/"><button type="button" class="btn btn-outline-info">Add to Cart</button></Link>
                </div>
            </div>

        </div>
    )

}