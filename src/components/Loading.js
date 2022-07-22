import { Col } from 'reactstrap';


const Loading = () => {
 return (
  <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
   <i className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary' />
   <p>Loading...</p>
  </Col >
 );
};

export default Loading;