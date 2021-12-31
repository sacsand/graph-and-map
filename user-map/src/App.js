import Map from './component/map'
import { useEffect,useState } from 'react';
import "antd/dist/antd.css";
import "./App.css"
import { Row, Col, Layout,List, Avatar} from 'antd';
import axios from 'axios'
const { Header,Content } = Layout;



const fetchUsers =  async () => {
    try {
        const {data} = await axios.get('https://api.json-generator.com/templates/Xp8zvwDP14dJ/data',{ headers: { Authorization: "Bearer v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z" }});
        return data
    } catch (err) {
        console.error(err);
        return err
    }
}

function App() {

  const [userDataJSON,setUserDataJSON] = useState([])
  const [user,setUser] = useState({})

  const setCurrentUser = (latlong,firstName,lastName,id) =>{
    setUser({firstName ,lastName,id,...latlong})
  }

  useEffect(async () => {
    const users = await fetchUsers();
    setUserDataJSON(users)
  },[])

  let locationFinder = (<div></div>)

  if(user.firstName || user.lastName ){
    locationFinder = (
    <div>
       <h3> {`${user.firstName} ${user.lastName}`} Location</h3> 
       <Map latlong={user}/> 
    </div>)
  }
  
  return (
    <>
    <Layout>
    <Header></Header>
    <Content>
      <Row>
        <Col span={12}>
        <div style={{height: 800,overflow: 'auto'}}>
          <List
            header={<div> <h3>All Friends</h3></div>}
            itemLayout="horizontal"
            bordered
            dataSource={userDataJSON}
            renderItem={({location,name,picture,email,_id}) => (
              <List.Item className={_id === user.id?  "active" : "" } key={_id} onClick={() => setCurrentUser(location,name.first,name.last,_id)}> 
                <List.Item.Meta
                  avatar={<Avatar src={picture} />}
                  title={`${name.first} ${name.last}`}
                  description={`email : ${email}  `}
                />
              </List.Item>
            )}
          />
          </div>
        </Col>
        <Col span={12}>
          {locationFinder}
        </Col>
      </Row>
    </Content>
    </Layout>
    </>
  );
}

export default App;
