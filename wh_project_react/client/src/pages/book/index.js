import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@mui/material/Button';

import { useGetUrlParams } from '../../services/url/index';

import LoadGear from '../../assets/loaders/load_gear.gif';
import './style.css';

export default inject('books') (
  observer((props) => {
    const [book, setBook] = useState([]);

    const urlParams = useGetUrlParams();
  
    const {isbn} = urlParams;

    useEffect(()=>{
      props.books.getBooksRequestData()
      .then(res=>{
        let data = res.filter(item => item.id === isbn)
        setBook(data);
      })
      .catch(error=>console.log(error))
    },[]);
    
    return (
      <>
        {props.books.state === 'pending' ? 
          <div className="book_loading">
            <img alt="Загрузка" src={LoadGear}/>
            <p>Вознесенние хвалы Омнисии</p>
          </div> :
          props.books.state === 'error' ? 
          <div className="book_error">
            <p>
              Еретики повредили инфо канал.<br />
              Попробуйте перезагрузить страницу.<br />
              Скитарии высланы для решения проблемы...
            </p>
          </div> :
          <div className="book_container">
            <div className="book_container_button">
              <Button
                className="book_button"
                variant="outlined"
                onClick={()=> {
                  props.history.go(-2);
                }}
              > 
                Назад 
              </Button>
            </div>
            {book.map((item,index)=>
              <div 
                key={index}
                className="book_list">
                <div className="book_img">
                <img alt="" src={require(`../../assets/images/${item.img}`)}/>
                </div>
                <div className="book_text">
                  <div className="book_title"><span>{item.title}</span></div>
                  <div className="book_author">Автор: <span>{item.author}</span></div>
                  <div className="book_dateRealeased">Дата выхода: <span>{item.dateRealeased}</span></div>
                  <div className="book_dateContext">Дата событий: <span>{item.dateContext}</span></div>
                  <div className="book_isbn">Номер в каталоге ISBN: <span>{item.id}</span></div>
                  <div className="book_description">Описание: <span>{item.description}</span></div>
                </div>
              </div>
            )}
          </div>
        }
      </>
    )
  })
)