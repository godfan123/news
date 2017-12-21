import React from  'react';
import {Row,Col} from 'antd';
import $ from 'jquery';
import PCNewsImageBlock from './pc_news_image_block';
export default class PCNewsDetails extends React.Component{
     constructor(){
         super();
         this.state={
                 newsItem:''
         }

     };

     componentDidMount(){
     var that=this;
         $.ajax({
             url:"http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey,
             type:'get',
             dataType:'json',
             cache:false,
             success:function(json){
                     that.setState({
                         newsItem:json
                     });
                 document.title=this.state.newsItem.title;
                console.log("error")
             },
             error:function(){

                 alert(1)

             }
         })
     };


    createMarkup(){

        return {__html: this.state.newsItem.pagecontent}

    }
          render(){

             return (

                 <div>
                     <Row>
                         <Col span={2}></Col>
                         <Col span={14} className="container">
                             <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>

                             </div>

                         </Col>
                         <Col span={6}>


                         </Col>

                         <Col span={2}></Col>
                     </Row>
                 </div>

             )

          }


}
