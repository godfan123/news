import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon,Form,Tabs,Input,Button,Modal} from 'antd';
import {Link} from 'react-router-dom'
import $ from 'jquery';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;


 class PCHeader extends React.Component {

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


     render() {
         const { getFieldDecorator} = this.props.form;
         const userShow = this.state.hasLogined
             ?
             <Menu.Item key={logout} className="register">
                 <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                 &nbsp;&nbsp;
                 <Link target="_blank">
                     <Button type="dashed" htmlType="button">个人中心</Button>
                 </Link>
                 &nbsp;&nbsp;
                 <Button ghost htmlType="button">退出</Button>
             </Menu.Item>
             :
             <Menu.Item key="register" className="register" >
                 <Icon type="appstore"/>注册/登入
             </Menu.Item>;

         return (
             <header>
                 <Row>
                     <Col span={2}></Col>
                     <Col span={4}>
                         <div className="logo">
                             <a href=""/>
                             <img src="./src/images/news.png" alt="logo"/>
                             <span>reactNews</span>
                         </div>
                     </Col>
                     <Col span={14}>
                         <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>

                             <Menu.Item key="top">
                                 <Icon type="appstore"/>头条
                             </Menu.Item>

                             <Menu.Item key="shehui">
                                 <Icon type="appstore"/>社会
                             </Menu.Item>

                             <Menu.Item key="guoji">
                                 <Icon type="appstore"/>国际
                             </Menu.Item>

                             <Menu.Item key="yule">
                                 <Icon type="appstore"/>娱乐
                             </Menu.Item>

                             <Menu.Item key="shishang">
                                 <Icon type="appstore"/>时尚
                             </Menu.Item>

                             <Menu.Item key="tiyu">
                                 <Icon type="appstore"/>体育
                             </Menu.Item>

                         </Menu>

                      </Col>
                     <Col span={2} >
                         <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            {userShow}
                         </Menu>
                     </Col>
                     <Col span={2}></Col>
                 </Row>


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

             </header>

         )
     }
 }
    export default PCHeader=Form.create({})(PCHeader);







