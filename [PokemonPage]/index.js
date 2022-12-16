import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Divider, Typography, Tag } from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
const { Meta } = Card;
const { Text } = Typography
const detailPokemont = () => {

  const router = useRouter()
  const PokemonPage = router.query.PokemonPage;

  const [pokemonDetails, setPokemonDetails] = useState({});
  const [pokemonFont, setPokemonFont] = useState();
  const [type, setType] = useState([]);
  const [font, setFont] = useState({});

  const getDetailsPokemon = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/` + PokemonPage)
      .then((res) => {
        setPokemonDetails(res.data)
        setPokemonFont(res.data.sprites.front_default)
        setType(res.data.types)
        setFont(res.data.sprites)
      })
  }

  useEffect(() => {
    getDetailsPokemon();
  }, [])

  // console.log(pokemonDetails.sprites.front_default)
  return (
    <>
      <br></br>
      <Divider orientation="left"><Text strong>{PokemonPage}</Text></Divider>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={12}>
            <Card
              hoverable
              cover={<img alt="example" style={{ width: '15rem' }} className='image' src={font.front_default}/> }
            >
              <Meta title={<Text strong>Normal Form</Text>} style={{ textAlign: 'center' }} />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              cover={<img alt="example" style={{ width: '15rem' }} className='image' src={font.front_shiny} />}
            >
              <Meta title={<Text strong>Shiny Form</Text>} style={{ textAlign: 'center' }}  />
            </Card>
          </Col>
        </Row>
      </div>
      <Divider orientation="center">Types</Divider>
      <Row>
        {type.map((tp, i) => (
          <Link href={`/Pokemon/${PokemonPage}/Types/${tp.type.name}`}>
            <Tag >{tp.type.name}</Tag>
          </Link>
        ))}
      </Row>
    </>
  )

}
export default detailPokemont;