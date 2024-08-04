import React from 'react'
import { Stack } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


export default function TopSearchBar({selectedCategory1,setSelectedCategory1}){

    const TopSearches = [
        {name:"Salaar"},
        {name:'Re Relases'},
        {name:'Ambanis wedding'},
        {name:"T20 world cup 2023"},
        {name:"agaman"},
        {name:"village culture"},
        {name:'Placements 2025'},
        {name:'AP Assembly'},
        {name:'Budget 2024'},
        {name:'Trending COurses'},
        {name:'Dum Biryani'},
        {name:'Story of purijaganth'},
        {name:'Mahabharat'},
        {name:'React Js'}
    ]

    return(
        <>
            <Stack
                direction="row" sx={{overflowY:"auto",height:{sx:"auto",md:"95%"},flexDirection:{md:"column"}}}
            >
                {TopSearches.map((topSearch)=>(
                    <button className='top-search'
                    style={{
                        backgroundColor : topSearch.name === selectedCategory1 && 'white',
                        color : topSearch.name === selectedCategory1 && 'black',
                    }}
                    key={topSearch.name}
                    onClick={()=>{setSelectedCategory1(topSearch.name)}}
                    >
                        <span id='arrow' style={{color:topSearch.name===selectedCategory1?"black":"white"}}><ArrowOutwardIcon sx={{fontSize:'20px'}} /></span>
                        <span style={{opacity:topSearch.name===selectedCategory1?"1":"0.8" , fontSize:'14px'}}>{topSearch.name.slice(0,12)}</span>
                    </button>
                ))} 
                </Stack>
        </>
    )
}