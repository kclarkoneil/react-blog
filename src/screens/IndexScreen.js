import React, {useContext} from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IndexScreen = () => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)

    return  <View>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList 
            data= {state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({item}) => {
                return <View style= {styles.row}>
                    <Text style={styles.title}> 
                    {item.title} - {item.id}
                    </Text>
                    <TouchableOpacity onPress={() => deleteBlogPost}>
                    <Feather name="trash" style={styles.icon}/>
                    </TouchableOpacity>
                    </View>
            }}
            />
        </View>
    
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})
export default IndexScreen