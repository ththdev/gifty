import * as React from 'react'
import styled from 'styled-components/native'

interface Props {
    name: string,
    brand: string,
    price: string,
    imageUrl?: string,
}

const defualtImage = "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch_series_5-space-black-titanium-case-viper-dark-091019_carousel.jpg.large.jpg"

const ListingItem = ({ name, brand, price, imageUrl }: Props) => {
    return (
        <Item>
            <Left>
                <ItemImage source={{ uri: imageUrl ? imageUrl : defualtImage}}/>
                <InfoWrapper>
                    <Brand>{brand}</Brand>
                    <Name>{name}</Name>
                </InfoWrapper>
            </Left>
            <Right>
                <Price>￦ {price}</Price>
            </Right>
        </Item>
    )
}

const Item = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

const Left = styled.View`
    flex-direction: row;
    align-items: center;
    width: 70%;
`
const Right = styled.View``

const ItemImage = styled.Image`
    width: 60px;
    height: 60px;
`

const InfoWrapper = styled.View`
    margin-left: 15px;
    width: 50%;
`

const Brand = styled.Text`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
`

const Name = styled.Text`
    font-size: 16px;
    color: rgba(0,0,0,0.8);
`

const Price = styled.Text`
    font-size: 14px;
    font-weight: bold;
    text-align: right;
`

export default ListingItem