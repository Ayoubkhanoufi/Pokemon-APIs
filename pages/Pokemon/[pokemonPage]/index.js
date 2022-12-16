import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Divider, Typography, Tag } from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

const { Meta } = Card;
const { Text, Title } = Typography

const detailPokemont = () => {

  const router = useRouter()
  const pokemonPage = router.query.pokemonPage;

  const [type, setType] = useState([]);
  const [font, setFont] = useState({});

  const getDetailsPokemon = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/` + pokemonPage)
      .then((res) => {
        setType(res.data.types)
        setFont(res.data.sprites)
      })
  }

  useEffect(() => {
    getDetailsPokemon();
  }, [])

  return (
    <>
      <Divider orientation="center"><Title level={3}>{pokemonPage}</Title></Divider>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={12}>
            <Card
              hoverable
              cover={<img alt="example" style={{ width: '15rem' }} className='image' src={font.front_default}/> }
            >
              <Divider/>
              <Meta title={<Text strong>Normal Form</Text>} style={{ textAlign: 'center' }} />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              cover={<img alt="example" style={{ width: '15rem' }} className='image' src={font.front_shiny} />}
            >
              <Divider/>
              <Meta title={<Text strong>Shiny Form</Text>} style={{ textAlign: 'center' }}  />
            </Card>
          </Col>
        </Row>
      </div>
      <Divider orientation="center">Types</Divider>
      <Row>
      <Text strong>Filter by type :</Text> 
      <br/>
        {type.map(tp => (
          <Link href={`/Pokemon/${pokemonPage}/Types/${tp.type.name}`}>
            <Tag style={{ textAlign: 'center' }}  >{tp.type.name}</Tag>
          </Link>
        ))}
      </Row>
    </>
  )
}
export default detailPokemont;