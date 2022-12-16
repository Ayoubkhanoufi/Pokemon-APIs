import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { Card, Typography, Avatar, Divider } from 'antd';
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const { Text, Title } = Typography
const { Meta } = Card;

const Types = () => {

    const [pokemonTypes, setPokemonTypes] = useState([]);

    const router = useRouter()
    const Types = router.query.Types;

    const getPokemonType = () => {
        axios.get(`https://pokeapi.co/api/v2/type/` + Types)
            .then((res) => {
                // console.log(res.data.pokemon)
                setPokemonTypes(res.data.pokemon)
            })
    }

    useEffect(() => {
        getPokemonType();
    }, [])

    return (
        <>
            <Divider orientation='center'><Title strong>{Types}</Title></Divider>
            <Card>
                {pokemonTypes.map((pk, i) => (
                    <Card.Grid style={gridStyle}>
                        <Link href={`/Pokemon/${pk.pokemon.name}`}>

                            <Meta
                                avatar={<Avatar src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + 1 + ".png"} />}
                                title={pk.pokemon.name}
                            />
                        </Link>
                    </Card.Grid>
                ))}
            </Card>
        </>
    )
}

export default Types;