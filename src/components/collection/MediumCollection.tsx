import * as React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import LinearGraident from 'react-native-linear-gradient'

const { width } = Dimensions.get('window');

const CollectionWidth = width - 30;
const CollectionHeight = CollectionWidth * 0.5;


interface Props {
    title: any,
    subTitle: any,
    imageUrl?: any
}

const defaultUrl = "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch_series_5-maps-app-screen-091019_carousel.jpg.large.jpg"

const MediumCollection = ({ title, subTitle, imageUrl }: Props) => {
    return (
        <Wrapper>
            <ImageBackground source={{ uri: imageUrl ? imageUrl : defaultUrl }} imageStyle={{ resizeMode: "cover" }}>
                <LinearGraident colors={["rgba(0,0,0,0.1)", "transparent"]}>
                    <Collection>
                            <SubTitle>{subTitle}</SubTitle>
                            <Title>{title}</Title>
                    </Collection>
                </LinearGraident>
            </ImageBackground>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    width: ${CollectionWidth}px;
    height: ${CollectionHeight}px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
    background: green;
    border-radius: 7px;
    overflow: hidden;
`

const ImageBackground = styled.ImageBackground`
    flex: 1;
`

const Collection = styled.View`
    padding: 20px;
`

/* ${props => props.image ? props.image : "" } */

const Title = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
`

const SubTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    opacity: 0.8;
    color: #fff;
    margin-bottom: 5px;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
`

export default MediumCollection