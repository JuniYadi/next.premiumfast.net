import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

export default function Addons(props) {
    const lists = props.lists

    return (
        <section className="bg-white border-b py-8">
            <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                <h1 className="w-full my-2 text-2xl lg:text-4xl font-bold leading-tight text-center text-gray-800">
                    Addons Product
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center">

                    {
                        lists.map((list, index) => (
                            <div key={`featurelist-${index}`} id={`featurelist-${index}`} className="w-full sm:w-1/1 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-md my-2 mx-auto lg:mx-0">
                                <div className="text-center text-sm text-black rounded-md">
                                    <div className="gradient text-lg text-white">
                                        {list.name}
                                    </div>
                                    <p className="text-xl font-bold my-4">{list.price}</p>
                                    <p className="mt-4">{list.description}</p>
                                    <div className="w-auto text-white my-2 py-2">
                                        <a href={list.link} className="bg-green-500 hover:bg-green-800 rounded-full mx-auto lg:mx-0 my-2 py-2 px-2">
                                            <FontAwesomeIcon icon={faPuzzlePiece} /> Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}