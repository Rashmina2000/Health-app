import React, { createContext, useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const ClickContext = createContext();

// Provider component to wrap the app and provide context
const ClickProvider = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementCount = () => setClickCount(clickCount + 1);

  return (
    <ClickContext.Provider value={{ clickCount, incrementCount }}>
      {children}
    </ClickContext.Provider>
  );
};

const FloatingButton = () => {
  const { clickCount } = useContext(ClickContext);
  const { incrementCount } = useContext(ClickContext);

  return (
    <TouchableOpacity style={styles.floatingButton} onPress={incrementCount}>
      <Text style={styles.floatingButtonText}>{clickCount}</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen({ route }) {
  const { username } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.hpb.health.gov.lk/api/get-current-statistical"
        );
        setData(response.data.data.daily_pcr_testing_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Date: {item.date}</Text>
      <Text style={styles.cardDescription}>PCR Count: {item.pcr_count}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {username}!</Text>
      <ClickProvider>
        <FloatingButton />
      </ClickProvider>
      {loading ? (
        <ActivityIndicator size="large" color="#C62E2E" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#C62E2E",
    borderRadius: 40,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 4,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
