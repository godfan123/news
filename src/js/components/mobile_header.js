
import React from 'react';
import {Row, Col} from 'antd';
var ReactDOM =  require('react-dom');
import {Menu, Icon,Form,Tabs,Input,Button,Modal} from 'antd';
import $ from 'jquery';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

import {BrowserRouter,Route,Router,Link} from 'react-router-dom'
 class MobileHeader extends React.Component{

    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    };

    handleClick(e) {

        if(e.key=='register'){
            this.setState({
                current: 'register',
            });
            this.setModalVisible(true);
        }else{
            {
                this.setState({current:e.key})
            }

        }

    };


    setModalVisible(value){
        this.setState({modalVisible:value});
    };


    handleSubmit(e){
        var formData;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                formData=values
            }
        });

        $.ajax({
            url:"http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action + "&username=" + formData.username + "&password=" + formData.password +
            "&r_username=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" +
            formData.r_confirmPassword,

            type:'post',
            dataType:'json',
            cache:false,
            success:function(data){
                console.log(data)

            },

            error:function(){

                console.log('无法请求到数据')

            }

        })

    }

    login(){


    }

    render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
   const userShow=!this.state.hasLogined?
       <Icon type="meh-o" />
     /*  <Router>
        <Link to="/usercenter">

            <Icon type="inBox" />

        </Link>
       </Router>*/
         :
         <Icon type="meh-o" onClick={this.login.bind(this)}/>;


        return(
            <div id="mobileHeader">
                <header>
                    <a href=""/>
                    <img src="./src/images/news.png" alt="logo"/>
                    <span>reactNews</span>
                    {userShow}
                </header>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)}
                       onOk={()=>this.setModalVisible(false)}
                       okText="关闭"
                       cancelText="取消"
                >

                    <Tabs tab="card">
                        <TabPane tab="注册" key="2">

                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('r_userName', {
                                        rules: [{ required: true, message: '请输入您的账号' }],
                                    })(<Input />)}
                                </FormItem>

                                <FormItem label="密码">
                                    {
                                        getFieldDecorator('r_password',{

                                            rules:[{required:true,message:'请输入您的密码'}]

                                        })(<Input/>)

                                    }
                                </FormItem>

                                <FormItem label="确认密码">
                                    {
                                        getFieldDecorator('r_confirmPassword',{

                                            rules:[{required:true,message:'请再次确认你的密码'}]

                                        })(<Input/>)
                                    }
                                </FormItem>

                                <Button type="primary" htmlType="submit">注册</Button>


                            </Form>


                        </TabPane>


                    </Tabs>

                </Modal>
            </div>

        )

    }


}


export default MobileHeader=Form.create({})(MobileHeader);
