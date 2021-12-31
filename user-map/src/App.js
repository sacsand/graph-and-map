import Map from './component/map'
import { useEffect,useState } from 'react';
import "antd/dist/antd.css";
import "./App.css"
import { Row, Col, Layout,List, Avatar, Button, Skeleton,Typography} from 'antd';
import axios from 'axios'
const { Header,Content } = Layout;



const fetchUsers =  async () => {
    try {
        const {data} = await axios.get('https://api.json-generator.com/templates/Xp8zvwDP14dJ/data',{ headers: { Authorization: "Bearer v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z" }});
        return data
    } catch (err) {
        console.error(err);
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
  return (
    <>
    <Layout>
    <Header></Header>
    <Content>
      <Row>
        <Col span={12}>
          <List
            header={<div> <h3>Friend List </h3></div>}
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
        </Col>
        <Col span={12}>
           <h3> Friend Location: {user.firstName} </h3> 
           <Map latlong={user}/> 
        </Col>
      </Row>
    </Content>
    </Layout>
    </>
  );
}

export default App;
