import * as React from 'react'
import styled from 'styled-components/native'
import Layout from '../components/main/Layout'
import { observer } from 'mobx-react'

import MediumCollection from '../components/collection/MediumCollection'
import ListingCollection from '../components/collection/ListingCollection'

const CollectionContainer = () => {
    return (
        <Layout>
            <ScrollView showsVerticalScrollIndicator={false} contentInset={{ bottom: 100 }}>
                <ScreenTitle>Collections</ScreenTitle>
                <MediumCollection title="All Items" subTitle="8 items" imageUrl="https://www.apple.com/v/ios/home/g/images/overview/hero__b0tfubssy0pe_large_2x.jpg" />
                <MediumCollection title="Smart Home" subTitle="3 items" imageUrl="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-projects-cover_images-158372136492518960.jpg/1440/none" />
                <ListingCollection title="Tech" subTitle="3 items" />
                <MediumCollection title="Home Office" subTitle="2 items" imageUrl="https://www.apple.com/v/ios/home/g/images/overview/hero__b0tfubssy0pe_large_2x.jpg" />
            </ScrollView>
        </Layout>
    )
}

const ScrollView = styled.ScrollView`
    padding-top: 60px;
    padding-left: 15px;
    padding-right: 15px;
`

const ScreenTitle = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
`

export default CollectionContainer