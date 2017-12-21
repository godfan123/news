
import React from 'react';
import {Card} from 'antd';
import {Row,Col} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';
import $ from 'jquery';

export default class MoblieNewsBlock extends React.Component{
    constructor(){
        super();
        this.state={
            news:""
        }
    }


    componentWillMount(){

        var that=this;
        $.ajax({

            url:"http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count,
            type:'get',
            dataType:'json',
            cache:false,
            success:function(json){
                that.setState({
                     news:json
                 })

            },

            error:function(){
                console.log('moblie news error')
            }

        })


    }


      render(){
          const {news}=this.state;
          const newsList=news.length
                  ?
              news.map((newsItem,index)=>(
                  <Router>
                   <section key={index} className="m_article list-item special_section clearfix">
                       <Link to={"details/${newsItem.uniquekey}"}>
                           <div className="m_article_img">
                               <img src={newsItem.thumbnail_pic_s}/>
                           </div>

                           <div className="m_article_info">
                               <div className="m_article_title">
                                    <span>{newsItem.title}</span>

                               </div>

                               <div className="m_article_desc clearfix">

                                   <div className="m_article_desc_l">
                                       <span className="m_article_channel">{newsItem.realtype}</span>
                                        <span className="m_article_title">{newsItem.date}</span>
                                   </div>

                               </div>


                           </div>


                       </Link>


                   </section>
                 </Router>

              ))
              :
              "未加载任何数据";


          return(

              <div>
                  <Row>
                      <Col span={24}>

                          {newsList}

                      </Col>


                  </Row>

              </div>

          )

      }


}

