import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Col, Row, Slider, Typography } from 'antd';
import { useRouter } from 'next/router';

import PokemonCard from "../../components/Pokemon"


const { Text } = Typography

function Home() {

    const router = useRouter()
    const supplierId = router.query.supplierId;

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const getPokemonData = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=160`)
            .then((res) => {
                setPokemon(res.data.results)
                // console.log(res.data.results)
            })
    }

    useEffect(() => {
        getPokemonData();
    }, [])

    const HandleClick = num => {
        setPage(num);
    }

    return (
        <>
            <Row gutter={16}>
                {pokemon.map((pk, i) => (
                    <Col key={i} className="gutter-row" span={6}>
                        <PokemonCard Pokemon={pk} Index={i + 1}/>
                    </Col>
                ))}
            </Row>
        </>
    );
}
export default Home
