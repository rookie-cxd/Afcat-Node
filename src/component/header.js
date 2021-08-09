import {Affix, Col, Layout, Row} from "antd"
import { Link } from "react-router-dom"
import Nav from "./nav";
import { navs } from "../routers/router.config";
import img from '../static/image/cnodejs_light.svg';

function Header() {
    return <Affix offsetTop={0} className="header">
        <Layout.Header style={{height:"40px"}}>
            <Row className="wrap">
                <Col span={8}>
                   <h1 id="logo">
                      <Link to="/">
                        <img src={img} alt="logo图片" className='logo'/>
                      </Link>
                      <input type="text" className="inputSearch"/>
                   </h1>
                </Col>
                <Col span={16}>
                    <Nav 
                      data={navs}
                      style={{
                        float:"right"
                      }}
                      getSelectedKey={({pathname})=>{
                        return navs.findIndex(item=>item.to === pathname)
                      }}
                      theme="dark"
                    />
                </Col>
            </Row>
        </Layout.Header>
    </Affix>
}

export default Header;