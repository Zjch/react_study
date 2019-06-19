import React from 'react';
import '../assets/login.css'
import MD5 from 'md5'
import { Form, Icon, Input, Button, Row, Col, message } from 'antd';
import { LoginIn, getCode } from '../http/particularAjax.js'

class NormalLoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }
  };

  // 生命周期-第一次渲染调用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
  componentDidMount(){
    
  };

  // 监听账号
  handleInput = (e) => {
    console.log(e.target.value)
    this.setState = {
      username: e.target.value
    }
  }

  // 获取验证码
  getCode = () => {
    // console.log(this.setState.username)
    if (this.setState.username === undefined) {
      message.error('请输入手机号！');
    } else {
      let account = this.setState.username
      getCode({
        "phone": account,
        "secret_key": MD5(MD5(account + 'admin_login') + 'qaz123'),
        "send_ip": '192.168.0.1'
      })
    }
  }

  // 注册
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        // let res = LoginIn({
        //   account: "15535558982",
        //   password: "1b0bafa0f58d85d841abe7f16281e1b8",
        //   verify_code: "521093"
        // })
        // console.log(res)
        // this.props.history.replace({pathname: '/nav'})
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="box">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入账号!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="账户"
                        onChange={this.handleInput}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                  <Row gutter={12}>
                    <Col span={17}>
                      {getFieldDecorator('verify_code', {
                          rules: [{ required: true, message: '请输入验证码!' }],
                      })(
                          <Input
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="验证码"
                          />,
                      )}
                    </Col>
                    <Col span={7}>
                      <Button type="primary" onClick={this.getCode}>获取验证码</Button>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                        登录
                    </Button>
                </Form.Item>
            </Form>
      </div>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login