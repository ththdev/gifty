import * as React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import ListingItem from '../item/ListingItem'

const { width } = Dimensions.get("window");

const CollectionWidth = width - 30;
const CollectionHeight = CollectionWidth * 1.2;

interface Props {
    title: string,
    subTitle: string
}

const ListingCollection = ({ title, subTitle }: Props) => {
    return (
        <Wrapper>
            <Collection>
                <SubTitle>{subTitle}</SubTitle>
                <Title>{title}</Title>
                <ListingItem name="Apple Watch Series 5" brand="Apple" price="899,000"/>
                <ListingItem 
                    name="Macbook Pro 16inch" 
                    brand="Apple" 
                    price="2,994,000" 
                    imageUrl="https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg" 
                />
                <ListingItem 
                    name="iPhone 12" 
                    brand="Apple" 
                    price="0" 
                    imageUrl="https://t1.daumcdn.net/liveboard/techplus/3e8952afc45c45fcbcffde710f739a99.jpg" 
                />
            </Collection>
        </Wrapper>
    )
}

const Wrapper = styled.TouchableWithoutFeedback``

const Collection = styled.View`
    width: ${CollectionWidth}px;
    background-color: #fff;
    border-radius: 7px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
`

const Title = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: #000;
    margin-bottom: 20px;
`

const SubTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    opacity: 0.6;
    color: #000;
    margin-bottom: 5px;
`

export default ListingCollection
