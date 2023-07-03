import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
    Box,
    Checkbox,
    Collapse,
    List,
    ListItem,
    ListItemText,
    Slider
} from '@mui/material';
import {MdExpandLess, MdOutlineExpandMore} from "react-icons/md";


const data = [
    {
      name: "Color",
      attributes: ["Red", "BLue", "Black", "Green", "White"],
      viewMore: "1",
    },
    {
      name: "Size",
      attributes: ["S", "M", "L", "XL", "XXL", "XXXL"],
      viewMore: "1",
    },
    {
      name: "Pattern",
      attributes: ["Striped", "Geometric", "Floral", "Polka Dots"],
      viewMore: "1",
    },
    {
      name: "Style",
      attributes: ["Vintage", "Casual", "Vacation", "Urban"],
      viewMore: "1",
    },
    {
      name: "Price",
      slider: true,
      attributes: [],
      viewMore: false,
    },
  ];
const marks = [
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '40',
    },
    {
        value: 37,
        label: '80',
    },
    {
        value: 100,
        label: '100',
    },
];


const LeftSection = () =>{
    const [rangeValue, setRangeValue] = useState([0, 40]);
    const [selectedIndex, setSelectedIndex] = useState("")

    const handleClick = index => {
        if (selectedIndex === index) {
            setSelectedIndex("")
        } else {
            setSelectedIndex(index)
        }
    }
  const handleReset = () => {
  setRangeValue([0,40])
}
    const handleSetRange = (value) => {
        setRangeValue(value);
    };


    return(

            <div className='container__left'>
                <div className='container__dropdown' style={{marginLeft:'-0.5rem' , lineHeight:'0.5rem'}}>
                    <h1>FILTERS</h1>
                    <div className='dropdown__category'>
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            {data.map((item, index) => {

                                return item.slider !== true ?
                                    (
                                        <List>
                                            <ListItem
                                                key={index}
                                                button
                                                onClick={() => {
                                                    handleClick(index)
                                                }}
                                                style={{borderBottom:'1px solid #e9ecef', marginTop:'-1rem'}}
                                            >
                                                <ListItemText primary={item.name} />
                                                {index === selectedIndex ? <MdExpandLess /> : <MdOutlineExpandMore />}
                                            </ListItem>
                                            <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit style={{marginLeft:'-1rem'}}>
                                                <List component="div" disablePadding>
                                                    {item?.attributes?.map((attribute, index) => {
                                                        return (
                                                            <ListItem button style={{marginBottom:'-1.2rem'}}>
                                                                <Checkbox style={{color:"black"}}/>
                                                                <ListItemText primary={attribute} />
                                                            </ListItem>
                                                        )
                                                    })}
                                                </List>
                                            </Collapse>
                                        </List>
                                    )
                                    : (
                                        <Box sx={{ width: 280 }} style={{marginLeft:'0.6rem', width:'75%'}}>
                                            <Slider
                                                aria-label="Restricted values"
                                                defaultValue={10}
                                                step={10}
                                                valueLabelDisplay="auto"
                                                marks={marks}
                                                min={10}
                                                max={100}
                                                style={{color:'black'}}
                                            />
                                        </Box>
                                    )
                            })}
                        </List>
                        <button>RESET</button>
                    </div>
                </div>
            </div>

       
  );
}

export default LeftSection
