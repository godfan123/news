
import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import  PCNewsImageBlock from './pc_news_image_block';
import $ from 'jquery';
const TabPane=Tabs.TabPane;


export default class PcNewsContainer extends React.Component{


    render(){
           const settings={
               effect:"scrollx",
               autoplay:true,
               dots:true
           };


        return (
            <div>
            <Row>
                <Col span={2}></Col>
                <Col span={20} className="container">
                    <div className="leftContainer">
                         <div className="carousel">
                              <Carousel {...settings}>
                                  <div><img src="./src/images/carousel_1.jpg"/></div>
                                  <div><img src="./src/images/carousel_2.jpg"/></div>
                                  <div><img src="./src/images/carousel_3.jpg"/></div>
                                  <div><img src="./src/images/carousel_4.jpg"/></div>
                              </Carousel>
                         </div>
                        <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" />
                    </div>

                    <Tabs className="tabs_news">

                          <TabPane tab="新闻" key="1">

                             <PCNewsBlock count={24} type="yule" width="100%" bordered="false" />

                          </TabPane>

                        <TabPane tab="国际" key="2">

                            <PCNewsBlock count={24} type="guoji" width="100%" bordered="false" />

                        </TabPane>

                    </Tabs>
                    <div style={{marginTop:"20px"}}>
                        <PCNewsImageBlock className="dd" count={10} type="guonei" width="100%" cardTitle="娱乐新闻" imageWidth="130px" />
                        <PCNewsImageBlock className="dd" count={10} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="132px" />
                    </div>
                </Col>
                <Col span={2}></Col>

            </Row>



            </div>
        )

    }


}