import React from 'react'
import {TextField, List, Input, Select, MenuItem, Button} from '@mui/material'
import './Graph.css'
import { Icon } from '@iconify/react';

const Graph = () =>{
    const [value, setValue] = React.useState('name');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const dropdownMenuProps={
        menuStyle:{
            border: "1px solid black",
            borderRadius: "5%",
            backgroundColor: 'lightgrey',
        },
    }
    return(
        <div className="main">
        <h1>React Search</h1>
        <div className="search">
            <Icon icon="mdi-light:magnify"  width={22.8} height={24}  />
            <Input disableUnderline={true}
                   sx={{
                       paddingLeft: '5px',
                       width: '83%'
                   }}

            ></Input>
            <div className={"search-text"}> sort by:</div>
            {/*<Select*/}
            {/*    className='dropdown'*/}
            {/*    labelId="demo-simple-select-label"*/}
            {/*    id="demo-simple-select"*/}
            {/*    value={value}*/}
            {/*    label="Age"*/}
            {/*    variant="standard"*/}
            {/*    onChange={handleChange}*/}
            {/*    disableUnderline={true}*/}
            {/*    MenuProps={{*/}
            {/*        PaperProps: {*/}
            {/*            sx: {*/}
            {/*                bgcolor: '#ECECEC',*/}
            {/*                paddingLeft: 3,*/}
            {/*                paddingRight: 3,*/}
            {/*                borderRadius: 5,*/}
            {/*                boxShadow:0,*/}
            {/*                borderInline: "skyblue",*/}

            {/*                '& .MuiMenuItem-root': {*/}
            {/*                    padding: 2,*/}
            {/*                },*/}

            {/*            },*/}
            {/*        },*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <MenuItem value={'name'}>name</MenuItem>*/}
            {/*    <MenuItem value={'category'}>category</MenuItem>*/}
            {/*</Select>*/}

                <select className={"dropdown"}>
                    <option value="0">name</option>
                    <option value="1">category</option>
                </select>

            <Button sx={{color:'black'}} >
            <Icon icon="ant-design:sort-ascending-outlined"  width={34.8} height={34}  />
            </Button>
            {/*<TextField*/}
          {/*  id="outlined-basic"*/}
          {/*  variant="outlined"*/}
          {/*  fullWidth*/}
          {/*  label="Search"*/}
          {/*/>*/}
        </div>

        <List />
      </div>
    )
}
export default Graph