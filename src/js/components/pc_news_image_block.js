import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default class PCNewsImageBlock extends React.Component{
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

            }
        })
    }


    render(){

        const styleImage={

            display:'block',
          width:this.props.imageWidth,
          height:"90px",

      };
      const styleH3={
           width:this.props.imageWidth,
           whiteSpace:"nowrap",
           overflow:"hidden",
           textOverflow:"ellipsis"
      };

        const {news} =this.state;

        const newsList=news.length
            ?
            news.map((newsItem,index)=>(
              <div key={index} className="imageBlock">
                     <Link to={"details/${newsItem.uniquekey}"} target="_blank">
                        <div className="imgBox">
                         <div className="custom-image">
                             <img src={newsItem.thumbnail_pic_s} style={styleImage} />
                         </div>

                         <div className="custom-card">
                              <h3 style={styleH3}>{newsItem.title}</h3>
                              <p>{newsItem.author_name}</p>
                         </div>
                        </div>
                      </Link>
              </div>
            ))
            :
            '没有加载到任何数据';

        return(
            <div className="topNewsList">
                <Card title={this.props.cardTitle} bordered={true} style={{width:this.props.width}} className="card">
                    <div className="newLen">
                        {newsList}
                    </div>
                </Card>

            </div>

        )

    }


}

