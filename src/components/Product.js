import React from 'react'
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import eyeOff from '../media/eye-off-thin.svg';
import eyeOn from '../media/eye-thin.svg';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";


export const Product = () => {
    const [dataItems, setItems] = useState([])
    let navigate = useNavigate();

    const getTodos = () => {
        Axios.get('http://localhost:8090/product/get_all_product').then((response)=> {
        return setItems(response.data);
        });
    };

    const deleteData = (id) => {
        if (window.confirm("Are you sure you want to delete this product!")) {
            Axios.delete(`http://localhost:8090/product/delete_product/${id}`).then((response)=> {
                if (response.status === 200) {
                    navigate("/");
                }
            });
        }   
    }
    
    useEffect(() => {
        getTodos()
    }, [])
    
    const columns = [
        {
            name: 'Image',
            selector: row => <img alt="" style={{ width:"60px",height:"60px" }} src={ JSON.parse(row.src_images)[0] }/>,
        },
        {
            name: 'Product SKU',
            selector: row => row.sku,
            sortable: true,
        },
        {
            name: 'Product Name',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price + " DT",
            sortable: true,
        },
        {
            name: 'Availability',
            selector: row => (row.quantity > 0) && row.available ? <span style={{ color: "grey", fontWeight: "600" }} ><span style={{ color: "#0ddd0d", fontWeight: "700" }} >In Stock</span> ({ row.quantity })</span> : <span style={{ color:"red", fontWeight: "700" }} >Out of Stock</span>,
            // sortable: true,
        },
        {
            name: 'Visibility',
            selector: row => row.visible ? <img alt="Displayed" src={eyeOn}/> : <img alt="Hidden" src={eyeOff}/>,
            // sortable: true,
        },
        {
            name: 'Action',
            selector: row => <div className="">
                                <Link to={`/productdetails/${row.id}`}>View</Link><br/>
                                <Link to={`/editproduct/${row.id}`}><button>Edit</button></Link><br/>
                                <button onClick={() => {deleteData(row.id);}}>Delete</button>
                            </div>,
        },
    ];

	const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = dataItems.filter(
		item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

        return (
            <>
                <div className="dropdown">
                    <button className="dropbtn">☰</button>
                    <div className="dropdown-content">
                        <a href="https://www.google.com/">View</a>
                        <a href="https://www.google.com/">Edit</a>
                        <a href="https://www.google.com/">Delete</a>
                    </div>
                </div>
                <input
                    id="search"
                    type="text"
                    placeholder="Filter By title"
                    aria-label="Search Input"
                    className="text-field-input"
                    value={filterText}
                    onChange={e => setFilterText(e.target.value)}
                />
                <button type="button" className="clear-button" onClick={handleClear}>
                    X
                </button>
            </>
		);
	}, [filterText, resetPaginationToggle]);

    if (dataItems === []) {
        return <h1>Loading ...</h1>;
    } else {
        
        return (
            <DataTable 
                title="View Products"
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
            />
	);
    }
}

