import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default class PCNewsBlock extends React.Component{
      constructor(){
          super();
          this.state={
              news:""
          };
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
                 });

               },

               error:function(){
                   console.log('news error')
               }
         })


      }

     render(){

         const {news} =this.state;
         const newsList=news.length
             ?
             news.map((newsItem,index)=>(
                   <li key={index}>
                       <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                           {newsItem.title}
                       </Link>
                   </li>
             ))
             :
             '没有加载到任何数据';

         return(

             <div className="topNewsList">

                 <Card>
                     <ul>
                         {newsList}
                     </ul>

                 </Card>

             </div>

         )

     }


}

