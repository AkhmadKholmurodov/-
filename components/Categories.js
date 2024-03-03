import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop:10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        <CategoryCard imgUrl='https://media.licdn.com/dms/image/D5603AQE9ics6cxpPyw/profile-displayphoto-shrink_800_800/0/1706591487138?e=2147483647&v=beta&t=2uEAXgV9U3EPEEAgtciXysf_0rI-OK05dxWuyTk1y44' title= "Cervejas" />
        <CategoryCard imgUrl='https://media.licdn.com/dms/image/D5603AQE9ics6cxpPyw/profile-displayphoto-shrink_800_800/0/1706591487138?e=2147483647&v=beta&t=2uEAXgV9U3EPEEAgtciXysf_0rI-OK05dxWuyTk1y44' title="Test"   />
        <CategoryCard imgUrl='https://media.licdn.com/dms/image/D5603AQE9ics6cxpPyw/profile-displayphoto-shrink_800_800/0/1706591487138?e=2147483647&v=beta&t=2uEAXgV9U3EPEEAgtciXysf_0rI-OK05dxWuyTk1y44' title="Testing"/>
        <CategoryCard imgUrl='https://media.licdn.com/dms/image/D5603AQE9ics6cxpPyw/profile-displayphoto-shrink_800_800/0/1706591487138?e=2147483647&v=beta&t=2uEAXgV9U3EPEEAgtciXysf_0rI-OK05dxWuyTk1y44' title="Testing"/>
        <CategoryCard imgUrl='https://media.licdn.com/dms/image/D5603AQE9ics6cxpPyw/profile-displayphoto-shrink_800_800/0/1706591487138?e=2147483647&v=beta&t=2uEAXgV9U3EPEEAgtciXysf_0rI-OK05dxWuyTk1y44' title="Testing"/>
        <CategoryCard imgUrl='https://media.licdn.com/dms/image/D5603AQE9ics6cxpPyw/profile-displayphoto-shrink_800_800/0/1706591487138?e=2147483647&v=beta&t=2uEAXgV9U3EPEEAgtciXysf_0rI-OK05dxWuyTk1y44' title="Testing"/>

    </ScrollView>
  )
}

export default Categories