import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        getProducts();
    },[]);

    const getProducts = async () =>{
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
    }
    const deleteProduct = async (productId) =>{
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getProducts();
    }

  return (
    <div>
        <p class="text-xl mb-4 font-medium text-gray-700">
            Daftar Produk
        </p>
        <Link to="/products/add" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Tambah Produk</Link>
        <div class="relative overflow-x-auto border border-gray-200 mt-6">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            No
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nama Produk
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Harga
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Penjual
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index)=>(
                        
                    <tr key={product.uuid} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {index + 1}
                        </th>
                        <td class="px-6 py-4">
                            {product.name}
                        </td>
                        <td class="px-6 py-4">
                            {product.price}
                        </td>
                        <td class="px-6 py-4">
                            {product.user.name}
                        </td>
                        <td class="px-6 py-4">
                            <Link to={`/products/edit/${product.uuid}`} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 me-2 py-2.5 text-center">
                                Edit
                            </Link>
                            <button onClick={()=> deleteProduct(product.uuid)} className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                Delete
                            </button>
                        </td>
                    </tr>

                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductList
