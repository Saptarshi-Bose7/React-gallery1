import React, {useState, useEffect} from "react";
import axios from 'axios'
import '../CSS/gallery.css'
import CloseIcon from '@mui/icons-material/Close';
const Gallery = () => {
    const [data,setData] = useState([])

    const [model,setModel] = useState(false);
    const [tempimgSrc,setTempImgSrc] = useState('');
    const [query,setQuery] = useState('');

    useEffect(() => {
        fillImage();
    }, [])

    const getImg = (previewURL) => 
    {
        setTempImgSrc(previewURL)
        setModel(true)
    }

    const fillImage = () =>
    {
        axios.get("https://pixabay.com/api/?key=31018404-40728bf845252e023cf3952dc")
        .then((response) => {
            
            setData(response.data.hits)
        })
    }

    return (
        <div>
        <div className="inp">
        <input type="search" placeholder="Search here" style={{color:'white'}} onChange={(event) => setQuery(event.target.value)} />
        </div>
        <div className={model ? "model open" : "model"}>
            <img src={tempimgSrc} alt=""/>
            <CloseIcon onClick={()=>setModel(false)}/>
        </div>
        <div className="gallery">
            {data.filter(post => {
                    if(query==='')
                        return post;
                    else if(post.tags.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
                        return post;
                
            }).map((item,index)=>{
                return (
                    <div className="pics" key={index} onClick={() => {getImg(item.largeImageURL)}}>
                        <img src={item.largeImageURL} alt="" style={{width: '100%'}}/>
                    </div>
                )
            })}
        </div>
        </div>
    );
}

export default Gallery;