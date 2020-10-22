import React, { useEffect, useState, useCallback } from 'react';
import API from './API';
import './App.scss';
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-css';
import Image from './component/Image';
import MyModal from './component/MyModal';

let pageNum = 1;

function App() {
  const [imagesArray, setImages] = useState([]);
  const [modalImg, setModalImg] = useState(null);
  const [showModalImg, showSelectedImage] = useState(false);

  const fetchImages = pageNumber => {
    API.get("/", { params: { page: pageNumber } }).then(res => {
      setImages([...imagesArray, ...res.data]);
    }).catch(err => console.log(err));
  }

  const showImageModal = useCallback((idx) => {
    setModalImg(idx);
    showSelectedImage(!showModalImg);
  }, [showModalImg]);
  
  const updateImg = type => {
    let newImgIndex = 0;
    if (type === 'prev' && modalImg > 0) newImgIndex = modalImg - 1;
    else if (type === 'next' && modalImg <= imagesArray.length) newImgIndex = modalImg + 1;
    setModalImg(newImgIndex);
  };

  useEffect(() => {
    fetchImages(pageNum);
  }, []); // eslint-disable-line

  const breakPointsColObj = {
    default: 6,
    1200: 3,
    992: 3,
    768: 2,
    576: 1
  }
  return (
    <div className="App">
      <header className="feed-header">
        React Photo feed
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-12 margin-top-100">
            <InfiniteScroll pageStart={0} loadMore={() => { fetchImages(pageNum++) }} hasMore={true}>
              <Masonry breakpointCols={breakPointsColObj} className="masonry-grid" columnClassName="masonry-grid_column">
                {
                  imagesArray.length && imagesArray.map((item, index) => {
                    return (
                      <Image key={index} index={index} imageSrc={item.urls.thumb} altText={item.alt_description} showImageModal={showImageModal} />
                    );
                  })
                }
              </Masonry>
            </InfiniteScroll>
          </div>
        </div>
        {
          (showModalImg || modalImg < 0) &&
          <MyModal
            showModal={showModalImg}
            hideHandler={showImageModal}
            dialogClassName="myModal"
            size="lg"
            keyboard
          >
            <div>
              <button aria-label="Close Modal Icon" className="close" type="button" onClick={showImageModal}>
                <span>×</span>
              </button>
            </div>
            <div className="display-flex">
              <div className="nav-btns"><button onClick={() => updateImg('prev')}><i class="fa fa-arrow-left" aria-hidden="true"></i></button></div>
              <img src={imagesArray[modalImg]?.urls?.small} alt="img" />
              <div className="nav-btns"><button onClick={() => updateImg('next')}><i class="fa fa-arrow-right" aria-hidden="true"></i></button></div>
            </div>
          </MyModal>
        }
      </div>
    </div>
  );
}

export default App;
