import React, { useState, useEffect } from 'react';
import { Card, Divider, Typography, Tag } from 'antd';
import Link from 'next/link';

const { Meta } = Card;
const { Text } = Typography

const PokemonCard = ({ Pokemon, Index }) => {

  return (
    <>
      <br></br>
      <Link href={`/Pokemon/${Pokemon.name}`}>
        <Card
          hoverable
          style={{
            width: "100%",
          }}
          bordered={false}
          size="small"
          cover={<img alt="example" style={{ width: '10rem' }}
            className='image'
            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + Index + ".png"} />
          }
        >
          <Divider />
          <Text code>#{Index}</Text>
          <Meta title={<Text strong>{Pokemon.name.toUpperCase()}</Text>} style={{ textAlign: 'center' }}/>
        </Card>
      </Link>
    </>
  )

};
export default PokemonCard;