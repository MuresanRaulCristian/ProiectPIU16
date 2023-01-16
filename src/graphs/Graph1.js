import React, {useState} from 'react'
import {TextField, List, Input, Select, MenuItem, Button, Grid} from '@mui/material'
import './Graph.css'
import {Icon} from '@iconify/react';
import {render} from "react-dom";
import cards from './graphs.json'
import {useParams} from "react-router-dom";

const Graph1 = () => {
    const [inputText, setInputText] = useState("");
    const [isActive, setIsActive] = useState(false);

    let { id } = useParams();


    const dropdownMenuProps = {
        menuStyle: {
            border: "1px solid black",
            borderRadius: "5%",
            backgroundColor: 'lightgrey',
        },
    }
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    function List(props) {
        //create a new array by filtering the original array
        const filteredData = cards.filter((el) => {
            //if no input the return the original
            if (props.input === '') {
                return el;
            }
            //return the item which contains the user input
            else {
                return el.text.toLowerCase().includes(props.input)
            }
        })
        return (
            <Grid container rowSpacing={5} columnSpacing={{xs: 1, sm: 2, md: 0}}
                  justify="center"

            >
                {filteredData.map((item) => (
                    <Grid item xs={6} align="center" key={item.src}>
                        <div className={'card'}>
                            <div className={'image-text'}>{item.text}</div>
                            <img src={require("" + item.src)} className={'small-image'}></img>
                        </div>
                    </Grid>
                ))}
            </Grid>
        )
    }
    return (
        <div className="main">
            <h1>React Search</h1>
            <div className="search">
                <Button sx={{color: 'black'}}>
                    <Icon icon="mdi-light:magnify" width={22.8} height={24}/>
                </Button>
                <Input onChange={inputHandler} disableUnderline={true}
                       sx={{
                           paddingLeft: '5px',
                           width: '81%',
                           fontFamily: 'Khmer',
                           fontSize: '20px',
                       }}

                ></Input>
                <div className={"search-text"}> sort by:</div>

                <select className={"dropdown"}>
                    <option value="0">name</option>
                    <option value="1">category</option>
                </select>

                <Button sx={{color: 'black'}}>
                    <Icon icon="ant-design:sort-ascending-outlined" width={34.8} height={34}/>
                </Button>
            </div>
            <div className={'card'}>
                <div className={'big-card'}>
                    <div className={'big-text'}>{cards[id].text}</div>
                    <div className={'time-select'}>
                        <div className={'time-select-text'}>
                            last:
                        </div>
                        <select className={"dropdown"}>
                            <option value="0">1 min</option>
                            <option value="1">30 min</option>
                            <option value="2">1 hour</option>
                        </select>
                    </div>
                </div>
                <img src={require("" + cards[id].src)} className={'big-image'}></img>
            </div>




            {/*<Grid item xs={6} align="center">*/}
                {/*    <div className={'card'}>*/}
                {/*        <div className={'image-text'}>Blood Glucose</div>*/}
                {/*        <img src={require("./images/graph1.png")} className={'small-image'}></img>*/}
                {/*    </div>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={6} align="center">*/}
                {/*    <div className={'card'} onClick={() => alert("hello")}>*/}
                {/*        <div className={'image-text'}>Heart Rate</div>*/}
                {/*        <img src={require("./images/graph2.png")} className={'small-image'}></img>*/}

                {/*    </div>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={6} align="center">*/}
                {/*    <div className={'card'}>*/}
                {/*        <div className={'image-text'}>Nutrients</div>*/}
                {/*        <img src={require("./images/graph3.png")} className={'small-image'}></img>*/}
                {/*    </div>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={6} align="center">*/}
                {/*    <div className={'card'}>*/}
                {/*        <div className={'image-text'}>Oxygen Levels - Blood</div>*/}
                {/*        <img src={require("./images/graph4.png")} className={'small-image'}></img>*/}
                {/*    </div>*/}

                {/*</Grid>*/}

        </div>
    )
}
export default Graph1