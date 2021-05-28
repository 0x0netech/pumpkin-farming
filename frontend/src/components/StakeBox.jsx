import React, { useState } from "react"
import styled from "styled-components";
import { ethers } from "ethers";
import MarkDai from "../assets/Mark_Dai.svg";

import { useUser } from '../context/UserContext'


const Container = styled.div`
    height: 15rem;
    width: 22rem;
    background-color: #2b2e35;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    border: .3rem solid black;
`;

const Img = styled.img`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .4rem;
`;

const Banner = styled.div`
    width: 100%;
    height: 33%;
    background: linear-gradient(45deg, #ED7014, #6e3003);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StakeInput = styled.input`
    height: 3rem;
    width: 80%;
`;

const StakeButton = styled.button`
    height: 3rem;
    width: 50%;
    background-color: black;
    color: #7A3803;
    font-size: 1.2rem;
`;

const AlignInput = styled.div`
    display: flex;
    align-items: center;
`;

const TopBanner = styled.div`
    align-self: center;
    font-size: 1.25rem;
    font-weight: bold;
`;

const BottomBanner = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
    font-weight: bold;
`;

const ClearButton = styled.button`
    width: 19%;
    height: 3.35rem;
    background-color: white;
    border: none;
    border-bottom: .1rem solid black;
`;

const Circle = styled.button`
    width: 7rem;
    height: 3.7rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: transparent;
    border: .05rem dashed yellow;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function StakeBox(props) {

    const {
        daiBalance, 
        stakingBalance
    } = useUser();

    const [ transferAmount, setTransferAmount ] = useState('');

    const stake = async() => {
        props.stake(transferAmount)
    }

    const unstake = async() => {
        props.unstake(transferAmount)
    }

    const handleTransfer = (event) => {
        setTransferAmount(event.target.value)
    }

    const dai = daiBalance ? ethers.utils.formatEther(daiBalance) : "0"
    const stkDai = stakingBalance ? ethers.utils.formatEther(stakingBalance) : "0"

    const bannerText = `Unstaked:`
    const bannerText2 = `Staked:`

    return(
        <Container>
            <Banner>
                <TopBanner>
                <Img src={MarkDai} alt='DAI logo'/>
                        DAI (1 PMKN / Day)
                </TopBanner>
            </Banner>
            <AlignInput>
                <StakeInput 
                    onChange={handleTransfer} 
                    placeholder="Input Amount"
                />
                <ClearButton>
                    clear
                </ClearButton>
            </AlignInput>
            <div>
                <StakeButton onClick={stake}>
                    Stake
                </StakeButton>
                <StakeButton onClick={unstake}>
                    Unstake
                </StakeButton>
            </div>
            <Banner>
                <BottomBanner>
                   

                </BottomBanner>
                <BottomBanner>
                    <Circle>
                        { bannerText }
                        <div>
                            { dai }
                        </div>
                    </Circle>
                    <Circle>
                        { bannerText2 }
                        <div>
                            { stkDai }
                        </div>
                    </Circle>
                </BottomBanner>
            </Banner>
        </Container>
    )
}