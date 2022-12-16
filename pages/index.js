import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row, Spin, Typography } from 'antd';

import PokemonCard from "../components/Pokemon"

function Home() {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPokemonData = () => {
        setLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=160`)
            .then((res) => {
                setPokemon(res.data.results)
                setLoading(false)
            }).catch((error) => {

            })
    }

    useEffect(() => {
        getPokemonData();
    }, [])

    return (
        <>
            <Spin spinning={loading} tip="Loading...">
                <Row gutter={16}>
                    {pokemon.map((pk, i) => (
                        <Col key={i} className="gutter-row" span={6}>
                            <PokemonCard Pokemon={pk} Index={i + 1} />
                        </Col>
                    ))}
                </Row>
            </Spin>
        </>
    );
}
export default Home

