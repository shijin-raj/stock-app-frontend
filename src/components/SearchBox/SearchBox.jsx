import React,{useState,useEffect} from 'react'
import {TextField} from '@material-ui/core/';
import Autocomplete from '@material-ui/lab/Autocomplete'
import './SearchBox.css';
import axios from 'axios'
import StockDetails from '../StockDetails/StockDetails'
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const url='https://find-stock-api.herokuapp.com/';


const SearchBox= (props)=> {
    
    const [stockData,setStockData]=useState({});
    const [stockList,setStockList]=useState([]);
    const [listLoaded,setListLoaded]=useState(false);
    const [loading,setLoading]=useState(false);
  
    const searchStock=(searchString)=>{
        setLoading(true);
        let query=`${url}search?name=${searchString}`;
        axios.get(query).then((response)=>{
            console.log(response.data);
            setStockData(response.data);
        }).catch((err)=>{
            console.error(err);
        }).finally(()=>setLoading(false));
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
    if(loading){
        return <LoadingScreen />
    }
    if(stockData.NAME){
        return <StockDetails {...stockData} />
    }
    else return <></>;
}
const displaySearch= ()=>{
    if(!listLoaded) {
        return <LoadingScreen />
    }
    return (
        <>
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
            </>
    )
}
    
    return (
        <div className='search-box'>
            <div className='form-title'>{props.title}</div>
        {displaySearch()}
        </div>
    )
   
}

export default SearchBox;