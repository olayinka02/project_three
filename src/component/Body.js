import React, { Component } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import dielectric from './image/dielectric.jpg';
import zoomimg from './image/zoomimg.png';
import jiomeet from './image/jiomeet.png';
import youtube from './image/youtube.png';
import facebook from './image/facebook.png';
import google from './image/google.png';
import microsoft from './image/microsoft.png';


class Body extends Component {
  render() {
    return (
    <div>
          <Container>
            <Row>
             <Col md={9}>
                 <Row>
                     <Col md={4}>
                         <div  className="courseimage">
                           <img src={dielectric} className="courseimage" alt="dielectric"/>
                         </div>
                     </Col>
                     <Col md={8}>
                          <div className="coursedetails">
                               <h6 className="coursename"><b>3CS1A - Electronic Devices and Circuits</b></h6>
                               <div style={{display:"inline",}}>
                                 <p>5.0
                                   <span> <svg xmlns="http://www.w3.org/2000/svg" style={{color:'orange',}} width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg><svg xmlns="http://www.w3.org/2000/svg" style={{color:'orange',}} width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{color:'orange',}} width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg><svg xmlns="http://www.w3.org/2000/svg" style={{color:'orange',}} width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg><svg xmlns="http://www.w3.org/2000/svg" style={{color:'orange',}} width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>

                                    </span>
                                    
                                    <span>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                        </svg><b style={{color:"blue",fontSize:13,}}> 2 months</b>
                                    </span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                        </svg><b style={{color:"blue",fontSize:13,}}> 1120</b>
                                    </p>
                               </div><br/>

                               <div>
                                   <h5>Start Live Session</h5>
                                   <p>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                     </svg>
                                     <span style={{fontSize:12,}}> Tuesday - 2 May 2020,</span><span  style={{fontSize:12,}} > 9:30 am to 11:00 am IST </span><span style={{color:"darkorange",fontSize:13,fontWeight:"bold",}}> (10 minutes remaining)</span>
                                   </p>
                                   <p>start live session using:</p>
                                   <div>
                                   <Dropdown style={{paddingLeft:-10,}}>
                                      <Dropdown.Toggle variant="outline-info" style={{borderRadius:30,height:27,color:'black'}} size="sm" id="dropdown-basic">
                                        choose platform
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                          <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        <img
                                        src={zoomimg}
                                        className="d-inline-block align-top"
                                        alt="socialicon"
                                        width="50"
                                        height="40"
                                        /> <b>zoom</b>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                          <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        <img
                                        src={jiomeet}
                                        className="d-inline-block align-top"
                                        alt="socialicon"
                                        width="37"
                                        height="38"
                                        /><b>  jiomeet</b>

                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                          <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        <img
                                        src={youtube}
                                        className="d-inline-block align-top"
                                        alt="socialicon"
                                        width="37"
                                        height="38"
                                        /><b>  youtube</b>

                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                          <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        <img
                                        src={facebook}
                                        className="d-inline-block align-top"
                                        alt="socialicon"
                                        width="43"
                                        height="23"
                                        /><b>  facebook</b>

                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                          <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        <img
                                        src={google}
                                        className="d-inline-block align-top"
                                        alt="socialicon"
                                        width="40"
                                        height="32"
                                        /><b>  Google</b>

                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                          <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        <img
                                        src={microsoft}
                                        className="d-inline-block align-top"
                                        alt="socialicon"
                                        width="40"
                                        height="34"
                                        /><b>  microsoft</b>

                                        </Dropdown.Item>
                                       
                                      </Dropdown.Menu>
                                    </Dropdown>
                                 
                                  

                                    <div className="btnright">start live section</div>
                                   </div>
                                  


                               </div>
                           </div>
                     </Col>
                 </Row>
                 <Row>
                   <Col md={12} className="courseexplanation">
                    {/* overview,Attendance, Q and A, Announcements etc are to be place here */}
                   </Col>
                 </Row>
             </Col>
                <Col md={3}>
                    <div className="coursequote">
                        <center>
                            <h6>Course Content</h6>
                        </center>
                        <div className="coursequotebodyone">
                          <p> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Condimentum nec sit et non 
                            volutpat urna. 
                          </p>
                        </div>
                        <div className="coursequotebodytwo">
                        <p> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Condimentum nec sit et non 
                            volutpat urna. 
                          </p>
                        </div>
                        <div className="coursequotebody">
                        <p> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Condimentum nec sit et non 
                            volutpat urna. 
                          </p>
                        </div>
                        <div className="coursequotebody">
                        <p> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Condimentum nec sit et non 
                            volutpat urna. 
                          </p>
                        </div>
                        <div className="coursequotebody">
                        <p> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Condimentum nec sit et non 
                            volutpat urna. 
                          </p>
                        </div>
                        <div className="coursequotebody">
                        <p> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Condimentum nec sit et non 
                            volutpat urna. 
                          </p>
                        </div>
                  

                    </div>
                </Col>
            </Row>
          </Container>
                    
    </div>
      
    );
  }
}



export default Body;


<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


 