import React from 'react'
import { useNavigate } from "react-router-dom";
import Layout from 'ShellApp/Layout';

type Props = {}

function ProductDetail({}: Props) {
  const navigate = useNavigate()
  return (
    <Layout>
    <div onClick={()=>navigate("/order")} style={{cursor:"pointer"}}>
        <ul>
            <li><strong>Name:</strong> Jacket</li>
            <li><strong>Price:</strong> $100</li>
            <li><strong>Description:</strong> This is a jacket</li>
            
        </ul>
    </div>
    </Layout>
  )
}

export default ProductDetail