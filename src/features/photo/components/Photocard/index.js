import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { RemoveAsyncThunk } from "../../photoSlice";
import FloatingIcon from "../Floating Icon";
import "./style.css";
PhotoCard.propTypes = {};

function PhotoCard(props) {
    const {photoItem} = props;
    const history = useHistory()
    const dispatch = useDispatch()
    const [isShow,setIsShow] = useState(false)
    const editPhoto = ()=>{
      const editPhotoUrl = `/photos/${photoItem.id}`;
      history.push(editPhotoUrl)
    }
    const removePhoto = ()=>{
      const action = RemoveAsyncThunk(photoItem.id)
      dispatch(action)
    }
    const[flag,setFlag] = useState(false)
    const handleShowFloating = ()=>{
        setIsShow(true)
    }
    const handleUnShowFloating=()=>{
         setIsShow(false)
    }
   
  return (
    <>
      <div id="card-photo" class="card-photo" style={{
              backgroundImage: `url(${photoItem.imageUrl})`,
            }}
            onMouseEnter={handleShowFloating}
            onMouseLeave={handleUnShowFloating}
            >
        <div class="img">
          <span
            style={{
              backgroundImage: `url(${photoItem.imageUrl})`,
            }}
          ></span>
          <span
            style={{
              backgroundImage: `url(${photoItem.imageUrl})`,
            }}
          ></span>
          <span
            style={{
              backgroundImage: `url(${photoItem.imageUrl})`,
            }}
          ></span>
          <span
            style={{
              backgroundImage: `url(${photoItem.imageUrl})`,
            }}
          ></span>
        </div>
        <div class="content">
          <h2> {photoItem.author}</h2>
          <h2>{photoItem.title}</h2>
          <h4>{photoItem.description}</h4>
        </div>
        <FloatingIcon editPhoto={editPhoto} removePhoto={removePhoto} isShow={isShow}/>
      </div>
    </>
  );
}

export default PhotoCard;
