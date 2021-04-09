import React from 'react'
import {TextField} from '@material-ui/core/';
import Autocomplete from '@material-ui/lab/Autocomplete'
import './SearchBox.css';
import {useState,useEffect} from 'react';
import axios from 'axios'
import StockDetails from '../StockDetails/StockDetails'

const url='http://stock-search-project.herokuapp.com/';


const SearchBox= (props)=> {
    
    const [stockData,setStockData]=useState([]);
    const [stockList,setStockList]=useState([]);
    const [listLoaded,setListLoaded]=useState(false);
  
    const searchStock=(searchString)=>{
        let query=`${url}search?name=${searchString}`;
        axios.get(query).then((response)=>{
            setStockData(response.data);
        }).catch((err)=>{
            console.error(err);
        });
    }

useEffect(() => {
    getList();
}, []);

const getList=()=>{
    let query=`${url}getList`;
    axios.get(query).then((response)=>{
        setStockList(response.data);
        setListLoaded(true);
    }).catch((err)=>{
        console.error(err);
    });
}

const handleChange =(e,value)=>{
    if(value){
        searchStock(value.NAME);
    }
}

const displayStockData =()=>{
    if(stockData[0]){
        return <StockDetails {...stockData[0]} />
    }
    else return <></>;
}

    if(listLoaded) {
    return (
        <div className='search-box'>
            <div className='form-title'>{props.title}</div>
            <div className='input-section'>

            <div className='form-item'>
            <Autocomplete
  id="search-input"
  onChange={(event,value)=>handleChange(event,value)}
  options={stockList}
  getOptionLabel={(option) => option.NAME}
  getOptionSelected={(option, value) => option.NAME === value.NAME}
  style={{ width: 430 }}
  renderInput={(params) => <TextField {...params} label={props.searchHint} variant="outlined" />}
/>
            </div>
 
            </div>
        {displayStockData()}
        </div>
    )
    }
    else {
        return (<></>)
    }
}

export default SearchBox;