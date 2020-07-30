import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function TableDefault(props) {
    const title = props.title ?? 'Biaya Langganan'
    const products = props.products

    // Check if Link is Array or Not
    function isArrayOrder(data) {
        if(Array.isArray(data)) {
            return (
                data.map((link, index) => (
                    <a key={`btn-order-${index}`} href={link.href} className="mx-auto lg:mx-0 hover:bg-green-800 bg-green-500 text-white font-bold rounded-full my-1 py-2 px-2 shadow-lg">
                        <FontAwesomeIcon icon={faCartPlus} /> {link.title ?? 'Buy Now'}
                    </a>
                ))
            )
        } else {
            return (
                <a href={data} className="mx-auto lg:mx-0 hover:bg-green-800 bg-green-500 text-white font-bold rounded-full my-2 py-2 px-2 shadow-lg">
                    <FontAwesomeIcon icon={faCartPlus} /> Buy Now
                </a>
            )
        }
    }

    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                <h1 className="w-full my-2 text-2xl lg:text-4xl font-bold leading-tight text-center text-gray-800">
                    {title}
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="flex flex-wrap justify-center">
                    {
                        products.map((product, index) => {
                            return (
                                <div key={`product-${index}`} id={`product-${index}`} className={`mx-auto lg:mx-0 w-full sm:w-1/1 md:w-1/2 lg:w-1/4 xl:w-1/4 ${product.featured == true ? 'rounded-lg z-10' : 'rounded-none lg:rounded-l-lg mt-2'} bg-white`}>

                                    <div className={`bg-white rounded-t rounded-b-none overflow-hidden shadow ${product.featured == true ? '' : 'text-gray-700'}`}>

                                        <div className={`text-xl ${product.featured == true ? 'w-full md:text-3xl gradient text-white' : 'bg-gray-500 md:text-2xl'} shadow font-bold text-center mx-2`}>{product.name}</div>

                                        <div className={`border-b-4 ${product.featured == true ? 'text-4xl font-bold text-center' : 'text-2xl text-gray-600 font-bold text-center'}`}>{product.price}<span className="text-base">{product.duration}</span></div>

                                        <div className={`${product.featured == true ? 'h-1 w-full gradient my-0 py-0 rounded-t' : ''} mb-2`}></div>

                                        <ul className={`w-full text-center ${product.featured == true ? 'text-base font-bold' : 'text-sm'}`}>
                                            {
                                                product.description.map((desc, index) => (
                                                    <li key={`productdesc-${index}`} id={`productdesc-${index}`} className="border-b">{desc}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="bg-white rounded-b rounded-t-none overflow-hidden shadow-lg py-4">
                                        <div className="flex flex-col items-center justify-center">
                                            {isArrayOrder(product.link)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}