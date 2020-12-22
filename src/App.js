import { Col, Image, Layout, Menu, Row } from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;
function App() {
  return (
    <Layout>
      <Header style={{backgroundColor:'white',height:'90px'}}>
        <Row style={{width:'70%',margin:'0 auto'}}>
          <Col span={6}>
              <Image src='https://rawcdn.githack.com/ducthien19052000/image-lan-thuong/07fcb7a8205200f4cc64804e933d037e666f1a3d/logo nắng xanh [Converted].jpg'/>
          </Col>
          <Col  span={12}>
          <Menu  mode="horizontal" className="menu-main">
            <Menu.Item key="1">
          
                Trang chủ
              
            </Menu.Item>

          
          </Menu>
          </Col>
          <Col span={6}>
            
          </Col>
        </Row>
      </Header> 
      <Content>
      <Row className='banner'>
          <Col md={12} style={{marginLeft:'25px'}}>
              <Row style={{margin:'20px 0 0 30px'}}>
                <h1 style={{fontSize:'32px' , color:'#306d5e'}}>
                  KHÁCH SẠN GREEN HOTEL
                </h1>
                
              </Row>
              <Row  style={{margin:'10px 0 0 30px'}}>  
                <Col xs={12} md={6} style={{}}>
                <span style={{fontSize:'16px', color:'#306d5e'}}>
                  Giảng viên hướng dẫn
                </span> 
                
                </Col>
                
              </Row>
              <Row  style={{marginLeft:'30px'}}>  
                <Col xs={12} md={6} style={{}}>
                <span style={{fontSize:'16px', color:'#306d5e',fontWeight:500}}>
                  Nguyễn Đình Khiêm
                </span> 
                </Col>
                
              </Row>
              <Row  style={{margin:'10px 0 10px 30px'}}>  
                <Col xs={12} md={6} style={{}}>
                <span style={{fontSize:'16px', color:'#306d5e'}}>
                  Sinh viên thực hiện
                </span> 
                </Col>
                
              </Row>
              <Row  style={{marginLeft:'30px'}}>  
                <Col xs={12} md={6} style={{}}>
                <span style={{fontSize:'16px', color:'#306d5e',fontWeight:500}}>
                  Nguyễn Ngọc Trọng <br/>
                  Vũ Đức Hải<br/>
                  Trần Thị Lan<br/>
                  Lê Duy Thái<br/>
                  Nguyễn Văn Thưởng<br/>
                  Lê Hữu Thắng<br/>
                  Nguyễn Tâm Anh Đức
                </span> 
                </Col>
                
              </Row>
          </Col>
      </Row>
      <Row className='container'>
        <Col xs={22} md ={15} style={{margin:'auto'}} >
          <Row style={{textAlign:'center',margin:'30px'}}>
            <div style={{textAlign:'center',width:'100%'}}>
            <h1 style={{fontSize:'40px',fontWeight:700,color:'#306d5e'}}>
               GIỚI THIỆU DỰ ÁN
              </h1>
            </div>
             
          </Row>
          <Row style={{marginBottom:'30px'}}>
              <Col xs={24} md={15} >
                <Image className='image-1'  src='https://rawcdn.githack.com/ducthien19052000/image-lan-thuong/d383b50603d7026409eacb584d0e5fb4e18488cd/z2238106418571_c6d2c161a9796b55757f009896e119cf.jpg' />
              </Col>
              <Col xs={24} md={9} style={{padding:'0 30px'}}>
                <h1 style={{fontSize:'27px',fontWeight:700}}>
                  Thông tin dự án
                </h1>
                <p style={{fontSize:'20px',fontWeight:600,marginBottom:'5px'}} >
                  Vị trí
                </p>
                <p style={{fontSize:'16px',fontWeight:500}} >
                   73 Nguyễn Trãi, P.Khương Trung, Q.Thanh Xuân, Hà Nội
                </p>
                <p style={{fontSize:'20px',fontWeight:600,marginBottom:0}} >
                  Tổng mặt bằng 
                </p>
                <p style={{fontSize:'16px',fontWeight:500,marginBottom:'5px'}} >
                   749 M2
                </p>
                <p style={{fontSize:'20px',fontWeight:600,marginBottom:'0'}} >
                  Mặt tiền nhà hàng
                </p>
                <p style={{fontSize:'16px',fontWeight:500,marginBottom:'5px'}} >
                   33 M2
                </p>
                <p style={{fontSize:'20px',fontWeight:600,marginBottom:'0'}} >
                  Chiều sâu nhà hàng
                </p>
                <p style={{fontSize:'16px',fontWeight:500,marginBottom:'5px'}} >
                  20,7 M
                </p>
                <p style={{fontSize:'20px',fontWeight:600,marginBottom:'0'}} >
                  Đối tượng khách hàng
                </p>
                <p style={{fontSize:'16px',fontWeight:500,marginBottom:'5px'}} >
                  Mọi lứa tuổi
                </p>
              </Col>
          </Row>
          <Row style={{marginBottom:'30px'}}>
              <Col xs={24} md={9} style={{padding:'0 30px'}}>
                <h1 style={{fontSize:'27px',fontWeight:700}}>
                  Khái quát khu đất 
                </h1>
                <p style={{fontSize:'18px',fontWeight:600,marginBottom:0}} >
                  GIAO THÔNG THUẬN TIỆN
                </p>
                <p style={{fontSize:'16px'}}>
                  Tiếp giáp là mặt đườnng Láng, trong bán kính 500m có đường vành đai 2, Ngã Tư Sở, Giải Phóng,...
                </p>
                <p style={{fontSize:'18px',fontWeight:600,marginBottom:0}} >
                  TIỆN ÍCH CÓ SẴN
                </p>
                <p style={{fontSize:'16px'}}>
                  Đối diện khách sạn là một công viên, các tòa chung cư, có các trường Dại học Thủy Lợi, Đại học Y, khu đô thị Royal City.
                </p>
              
              </Col>
              <Col xs={24} md={15} >
                <Image  src='https://rawcdn.githack.com/ducthien19052000/image-lan-thuong/238c7c0a98516c778667f867ea0e6fabf7e0195b/z2238116420461_96bf9e565f1da317726553d59caaaac1.jpg' />
              </Col>
            
          </Row>
          <Row style={{marginBottom:'30px'}}>
              <Col xs={24} md={15} >
                <Image  src='https://rawcdn.githack.com/ducthien19052000/image-lan-thuong/238c7c0a98516c778667f867ea0e6fabf7e0195b/z2238116089841_6a44dab46e6105c6a8e98a0ad6bb3255.jpg' />
              </Col>
              <Col xs={24} md={9} style={{padding:'0 30px'}}>
                <h1 style={{fontSize:'27px',fontWeight:700}}>
                  MỤC TIÊU XÂY DỰNG
                </h1>
                <p style={{fontSize:'20px',fontWeight:600,marginBottom:'5px'}} >
                  MỤC TIÊU
                </p>
                <p style={{fontSize:'16px'}} >
                    Khách sạn xanh là những công trình khách sạn
                     hướng tới mục tiêu phát triển bền vững và thân thiện với môi trường, 
                     là khách sạn với không gian mở, tốt cho sức khỏe con người, khách sạn tiết kiệm năng 
                     lượng, sử dụng tối đa ánh sáng thiên nhiên và chuẩn trong vấn đề xử lý rác thải.
                </p>
               
              </Col>
          </Row>

        </Col>

      </Row>
      <Row>
      <Col xs={22} md ={15} style={{margin:'auto'}} >
      <Row style={{textAlign:'center',margin:'30px'}}>
            <div style={{textAlign:'center',width:'100%'}}>
            <h1 style={{fontSize:'40px',fontWeight:700,color:'#306d5e'}}>
            BẢN VẼ CÁC MẶT BẰNG
              </h1>
            </div>
             
          </Row>
          <Row>
            <Col xs={24} md={12} >
              <div style={{margin:'20px'}}>
              <Image width={480} src='https://rawcdn.githack.com/ducthien19052000/image-lan-thuong/238c7c0a98516c778667f867ea0e6fabf7e0195b/MB-NOI-THAT-TANG1.jpg'/>
              </div>
            
   
            </Col>
            <Col xs={24} md={12}>
               <div style={{margin:'20px'}}>
               <Image  width={470} src='https://rawcdn.githack.com/ducthien19052000/image-lan-thuong/238c7c0a98516c778667f867ea0e6fabf7e0195b/MB-NOI-THAT-TANG2.jpg'/>
              </div>
            </Col>
            
          </Row>
          <Row>
            <Col xs={24} md={12} offset={6}>
              <Image src='https://rawcdn.githack.com/ducthien19052000/image-lan-thuong/238c7c0a98516c778667f867ea0e6fabf7e0195b/MB-NOI-THAT-TANG3.jpg'/>
            </Col>
          </Row>
      
        </Col>
      </Row>
      <Row>      <Col xs={22} md ={15} style={{margin:'auto'}} >
      <Row style={{textAlign:'center',margin:'30px'}}>
            <div style={{textAlign:'center',width:'100%'}}>
            <h1 style={{fontSize:'35px',fontWeight:700,color:'#306d5e'}}>
            PHỐI CẢNH 3D DỰ ÁN KHÁCH SẠN GREEN HOTEL  </h1>
            </div>
            <iframe width="100%" height='500' 
src="https://www.youtube.com/embed/_-ujKkozic0">
</iframe>
          </Row> 
      
        </Col>
      </Row>
      </Content>
      <Footer style={{backgroundColor:'#6c7794',color:'white'}}>
          <Row>
            <Col md={20} offset={4}>
              <Row>
                <Col span={11}>
                  <h1 style={{color:'#fff'}}>
                    THÔNG TIN LIÊN HỆ
                  </h1>
                  <p style={{fontSize:'16px',fontWeight:400}} >Tel: +84908686868
                  </p>
                  <p  style={{fontSize:'16px',fontWeight:400}}>
                    Email: greenhotel@gmail.com
                  </p>
                  <p  style={{fontSize:'16px',fontWeight:400}}>
                    73 Nguyễn Trãi, P.Khương Trung, Q.Thanh Xuân, Hà Nội 
                  </p>
                </Col>
                <Col span={13}>
                </Col>
              </Row>
            </Col>
          </Row>
      </Footer>
    </Layout>
  );
}

export default App;
