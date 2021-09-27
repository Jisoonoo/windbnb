import stay from '../stays.json'
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import './Data.css';
import {AiFillStar} from 'react-icons/ai'

function Data() {

    const list = stay.sort(function (a , b) {
        return (a.superHost === b.superHost) ? 0 : b? -1 : 1;
    });
    
    const renderData = list.map((items, index) => (
        <div className='box-container' key={index}>
            <img src={items.photo} alt={items.title} key={index} className='cover-images'/>
            <Stack direction='row' spacing={0} justifyContent='flex-end' sx={{margin: '10px 0 10px 0'}}>
                <Stack direction='row' spacing={items.superHost ? 2 : 0} justifyContent='flex-start' sx={{width: '100%'}}>
                    <div className={items.superHost ? 'super-host' : 'no-super-host'}>Super Host</div>
                    <div className='type'>{items.beds ? items.type + ' . ' + items.beds : items.type}</div>
                </Stack>
                <div className='rating'><AiFillStar style={{color: '#eb5757', marginRight: '2px'}}/>{items.rating}</div>
            </Stack>
            <div className='title'>{items.title}</div>
        </div>
    ))
    return(
        <div className='grid-container'>
            {renderData}
        </div>
    )
}

export default Data