import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import search from '../public/assets/search.png';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import image1 from '../public/assets/image1.png';
import { Scrollbars } from 'react-custom-scrollbars-2';
import HorizontalSlider from 'react-horizontal-slider';
import FlatList from 'flatlist-react';

//frames

import frame1 from '../public/assets/f1.png';
import frame2 from '../public/assets/f2.png';
import frame3 from '../public/assets/f3.png';
import frame4 from '../public/assets/f4.png';

//new videos
import newVido1 from '../public/assets/nv1.png';
import newVido2 from '../public/assets/nv2.png';
import newVido3 from '../public/assets/nv3.png';
import newVido4 from '../public/assets/nv4.png';

//icons
import icon1 from '../public/assets/icon1.png';
import icon2 from '../public/assets/icon2.png';
import icon3 from '../public/assets/icon3.png';
import icon4 from '../public/assets/icon4.png';
import icon5 from '../public/assets/icon5.png';

export default function Home() {
  const imgData = [
    { id: 1, image: image1 },
    { id: 2, image: image1 },
    { id: 3, image: image1 },
  ];
  const renderItem = ({ imgData }) => <Image src={imgData.image}></Image>;

  return (
    <div>
      <div className={`${styles['common-bg']}`}>
        <div className="mt-4">
          <div className=" d-flex justify-content-between align-items-center container">
            <div className="d-flex">
              <div>
                <div className={`${styles['circle']} mt-2`}></div>
              </div>
              <div className="container d-flex justify-content-start">
                <Nav.Link href="/">
                  <div className={`${styles['text-style']} mt-1  `}>
                    Hi Their !
                    <p className={styles['small-text-style']}>
                      Subscribe for Premium experience
                    </p>
                  </div>
                </Nav.Link>
              </div>
            </div>
            <Image src={search}></Image>
          </div>

          <div className={`${styles.scrollmenu} container`}>
            <div>
              <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                list={[
                  { i: 1, image: image1 },
                  { i: 2, image: image1 },
                  { i: 3, image: image1 },
                ]}
                renderItem={(item) => (
                  <div className="me-3">
                    <Image cont src={item.image}></Image>
                  </div>
                )}
              />
            </div>
          </div>
          {/* <FlatList list={[image1, 2, 3]} renderItem={(item) => <li>{item}</li>} /> */}

          <div className="d-flex justify-content-between align-items-center mt-5 container">
            <p className={`${styles['category-text-style']}`}>
              Expolore Category
            </p>
            <p className={`${styles['view-text-style']}`}>View All</p>
          </div>

          {/* small images */}
          <div className={`${styles.scrollmenu} container`}>
            <div>
              <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                list={[
                  { i: 1, image: frame1 },
                  { i: 2, image: frame2 },
                  { i: 3, image: frame3 },
                  { i: 4, image: frame4 },
                ]}
                renderItem={(item) => (
                  <div className="me-3">
                    <Image cont src={item.image}></Image>
                  </div>
                )}
              />
            </div>
          </div>

          {/* new video */}
          <div className="d-flex justify-content-between align-items-center mt-5 container">
            <p className={`${styles['category-text-style']}`}>
              New Release Video
            </p>
            <p className={`${styles['view-text-style']}`}>View All</p>
          </div>
          <div className={`${styles.newVideo} container`}>
            <div>
              <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                list={[
                  { i: 1, image: newVido1 },
                  { i: 2, image: newVido2 },
                  { i: 3, image: newVido3 },
                  { i: 4, image: newVido4 },
                ]}
                renderItem={(item) => (
                  <div>
                    <div class="card me-3">
                      <div className="d-flex flex-column">
                        <Image src={item.image}></Image>
                        <div className="card-body">
                          <p
                            className={`text-start ${styles['text-bangla-style']}`}
                          >
                            সময়ের সেরা নতুন গজল । Ishq E Nabi <br />
                            Jindabad । ইশকে নাবী জিন্দাবাদ
                          </p>
                          <div className="d-flex justify-content-center">
                            <button className="btn btn-primary btn-link text-decoration-none">
                              Tab to watch
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <div
          className={`ps-5 pe-5 mt-5 ${styles['footer']} d-flex justify-content-between`}
        >
          <Image src={icon1}></Image>
          <Image src={icon2}></Image>
          <Image src={icon3}></Image>
          <Image src={icon4}></Image>
          <Image src={icon5}></Image>
        </div>
      </div>
    </div>
  );
}
