import { View, Text, Button, StyleSheet } from "react-native";

type Props = {
    title: string
    index: number
    deleteItem: (i: number) => void
}

export default function ListItem({index, title, deleteItem}: Props) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{title}</Text>
            <Button title="Delete" color="#e53935" onPress={() => deleteItem(index)} />
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

    itemText: {
        fontSize: 16,
    },
});